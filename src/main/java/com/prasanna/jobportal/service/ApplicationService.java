package com.prasanna.jobportal.service;

import com.prasanna.jobportal.dto.ApplicationResponse;
import com.prasanna.jobportal.dto.ApplyJobRequest;
import com.prasanna.jobportal.entity.*;
import com.prasanna.jobportal.repository.ApplicationRepository;
import com.prasanna.jobportal.repository.JobRepository;
import com.prasanna.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import com.prasanna.jobportal.entity.ApplicationStatus;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    public String applyJob(ApplyJobRequest request) {

        String email =
                SecurityContextHolder.getContext()
                        .getAuthentication()
                        .getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow();

        Job job = jobRepository.findById(request.getJobId())
                .orElseThrow();

        Application application = Application.builder()
                .applicant(user)
                .job(job)
                .status(ApplicationStatus.APPLIED)
                .appliedAt(LocalDateTime.now())
                .build();

        applicationRepository.save(application);

        return "Application Submitted Successfully";
    }
    public List<ApplicationResponse> getMyApplications() {

        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        List<Application> applications =
                applicationRepository.findByApplicant(user);

        return applications.stream()
                .map(app -> ApplicationResponse.builder()
                        .id(app.getId())
                        .jobTitle(app.getJob().getTitle())
                        .company(app.getJob().getCompany())
                        .status(app.getStatus().name())
                        .appliedAt(app.getAppliedAt())
                        .build())
                .toList();
    }
}