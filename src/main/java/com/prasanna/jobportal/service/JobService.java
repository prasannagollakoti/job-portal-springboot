package com.prasanna.jobportal.service;

import com.prasanna.jobportal.dto.CreateJobRequest;
import com.prasanna.jobportal.dto.JobResponse;
import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.entity.User;
import com.prasanna.jobportal.repository.JobRepository;
import com.prasanna.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    public JobResponse createJob(CreateJobRequest request) {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User recruiter = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Recruiter not found"));

        Job job = Job.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .company(request.getCompany())
                .location(request.getLocation())
                .salary(request.getSalary())
                .jobType(request.getJobType())
                .createdAt(LocalDateTime.now())
                .recruiter(recruiter)
                .build();

        Job savedJob = jobRepository.save(job);

        return JobResponse.builder()
                .id(savedJob.getId())
                .title(savedJob.getTitle())
                .description(savedJob.getDescription())
                .company(savedJob.getCompany())
                .location(savedJob.getLocation())
                .salary(savedJob.getSalary())
                .jobType(savedJob.getJobType())
                .build();
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
    }

    public List<Job> searchByLocation(String location) {
        return jobRepository.findByLocation(location);
    }

    public List<Job> searchByCompany(String company) {
        return jobRepository.findByCompany(company);
    }

    public List<Job> searchByTitle(String keyword) {
        return jobRepository.findByTitleContainingIgnoreCase(keyword);
    }
}