package com.prasanna.jobportal.controller;

import com.prasanna.jobportal.dto.CreateJobRequest;
import com.prasanna.jobportal.dto.JobResponse;
import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    @PostMapping
    public JobResponse createJob(
            @RequestBody CreateJobRequest request) {

        return jobService.createJob(request);
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }
    @GetMapping("/location/{location}")
    public List<Job> getJobsByLocation(
            @PathVariable String location) {

        return jobService.searchByLocation(location);
    }

    @GetMapping("/company/{company}")
    public List<Job> getJobsByCompany(
            @PathVariable String company) {

        return jobService.searchByCompany(company);
    }

    @GetMapping("/search/{keyword}")
    public List<Job> searchJobs(
            @PathVariable String keyword) {

        return jobService.searchByTitle(keyword);
    }
}