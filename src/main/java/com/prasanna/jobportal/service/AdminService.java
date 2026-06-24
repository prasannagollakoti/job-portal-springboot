package com.prasanna.jobportal.service;

import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.entity.User;
import com.prasanna.jobportal.repository.ApplicationRepository;
import com.prasanna.jobportal.repository.JobRepository;
import com.prasanna.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;

    public List<User> getAllUsers() {

        return userRepository.findAll();

    }

    @Transactional
    public String deleteUser(Long id) {

        applicationRepository.deleteByApplicantId(id);

        userRepository.deleteById(id);

        return "User Deleted Successfully";

    }

    public List<Job> getAllJobs() {

        return jobRepository.findAll();

    }

    public String deleteJob(Long id) {

        jobRepository.deleteById(id);

        return "Job Deleted Successfully";

    }
}