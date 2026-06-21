package com.prasanna.jobportal.service;

import com.prasanna.jobportal.dto.SavedJobResponse;
import com.prasanna.jobportal.entity.*;
import com.prasanna.jobportal.repository.JobRepository;
import com.prasanna.jobportal.repository.SavedJobRepository;
import com.prasanna.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SavedJobService {

    private final SavedJobRepository savedJobRepository;
    private final UserRepository userRepository;
    private final JobRepository jobRepository;

    public String saveJob(Long jobId) {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow();

        Job job = jobRepository.findById(jobId)
                .orElseThrow();

        SavedJob savedJob = SavedJob.builder()
                .user(user)
                .job(job)
                .savedAt(LocalDateTime.now())
                .build();

        savedJobRepository.save(savedJob);

        return "Job saved successfully";
    }

    public List<SavedJobResponse> getSavedJobs() {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow();

        List<SavedJob> savedJobs =
                savedJobRepository.findByUser(user);

        return savedJobs.stream()
                .map(saved -> SavedJobResponse.builder()
                        .id(saved.getId())
                        .title(saved.getJob().getTitle())
                        .company(saved.getJob().getCompany())
                        .location(saved.getJob().getLocation())
                        .salary(saved.getJob().getSalary())
                        .build())
                .toList();
    }
}