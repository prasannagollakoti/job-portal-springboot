package com.prasanna.jobportal.controller;

import com.prasanna.jobportal.dto.AdminStatsResponse;
import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.entity.User;
import com.prasanna.jobportal.repository.ApplicationRepository;
import com.prasanna.jobportal.repository.JobRepository;
import com.prasanna.jobportal.repository.UserRepository;
import com.prasanna.jobportal.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ApplicationRepository applicationRepository;


    // USERS

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User> getAllUsers() {

        return adminService.getAllUsers();

    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id) {

        return adminService.deleteUser(id);

    }


    // JOBS

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/jobs")
    public List<Job> getAllJobs() {

        return adminService.getAllJobs();

    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/jobs/{id}")
    public String deleteJob(@PathVariable Long id) {

        return adminService.deleteJob(id);

    }


    // STATISTICS

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/stats")
    public ResponseEntity<AdminStatsResponse> getStats() {

        AdminStatsResponse response = new AdminStatsResponse(
                userRepository.count(),
                jobRepository.count(),
                applicationRepository.count()
        );

        return ResponseEntity.ok(response);

    }

}