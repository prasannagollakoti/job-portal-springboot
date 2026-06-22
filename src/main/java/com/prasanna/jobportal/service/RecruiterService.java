package com.prasanna.jobportal.service;

import com.prasanna.jobportal.dto.ApplicantResponse;
import com.prasanna.jobportal.dto.UpdateApplicationStatusRequest;
import com.prasanna.jobportal.entity.Application;
import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.entity.User;
import com.prasanna.jobportal.repository.JobRepository;
import com.prasanna.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import com.prasanna.jobportal.dto.CreateJobRequest;
import java.time.LocalDateTime;
import com.prasanna.jobportal.repository.ApplicationRepository;
import com.prasanna.jobportal.repository.SavedJobRepository;
import java.util.List;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RecruiterService {

    private final JobRepository jobRepository;
    private final UserRepository userRepository;
    private final ApplicationRepository applicationRepository;
    private final SavedJobRepository savedJobRepository;
    private final EmailService emailService;
    public List<Job> getMyJobs() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User recruiter = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Recruiter not found"));

        return jobRepository.findByRecruiter(recruiter);
    }
    public Job updateJob(Long id, CreateJobRequest request) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        job.setTitle(request.getTitle());
        job.setDescription(request.getDescription());
        job.setCompany(request.getCompany());
        job.setLocation(request.getLocation());
        job.setSalary(request.getSalary());
        job.setJobType(request.getJobType());

        return jobRepository.save(job);
    }

    @Transactional
    public String deleteJob(Long id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        applicationRepository.deleteByJob(job);

        savedJobRepository.deleteByJob(job);

        jobRepository.delete(job);

        return "Job deleted successfully";
    }
    public List<ApplicantResponse> getApplicants(Long jobId) {

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        List<Application> applications =
                applicationRepository.findByJob(job);

        return applications.stream()
                .map(app -> ApplicantResponse.builder()
                        .applicationId(app.getId())
                        .applicantName(app.getApplicant().getName())
                        .email(app.getApplicant().getEmail())
                        .status(app.getStatus())
                        .build())
                .toList();
    }
    public String updateApplicationStatus(
            Long applicationId,
            UpdateApplicationStatusRequest request) {

        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        application.setStatus(request.getStatus());

        applicationRepository.save(application);
        emailService.sendStatusEmail(
                application.getApplicant().getEmail(),
                application.getJob().getTitle(),
                application.getStatus().name()
        );

        return "Application status updated successfully";
    }
}