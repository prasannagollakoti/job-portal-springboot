package com.prasanna.jobportal.controller;

import com.prasanna.jobportal.dto.ApplicantResponse;
import com.prasanna.jobportal.dto.UpdateApplicationStatusRequest;
import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.service.RecruiterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.prasanna.jobportal.dto.CreateJobRequest;
import java.util.List;


@RestController
@RequestMapping("/recruiter")
@RequiredArgsConstructor
public class RecruiterController {

    private final RecruiterService recruiterService;

    @GetMapping("/jobs")
    public List<Job> getMyJobs() {
        return recruiterService.getMyJobs();
    }
    @PutMapping("/jobs/{id}")
    public Job updateJob(
            @PathVariable Long id,
            @RequestBody CreateJobRequest request) {

        return recruiterService.updateJob(id, request);
    }

    @DeleteMapping("/jobs/{id}")
    public String deleteJob(@PathVariable Long id) {

        System.out.println("DELETE API HIT");

        return recruiterService.deleteJob(id);
    }
    @GetMapping("/jobs/{jobId}/applicants")
    public List<ApplicantResponse> getApplicants(
            @PathVariable Long jobId) {

        return recruiterService.getApplicants(jobId);
    }
    @PutMapping("/applications/{applicationId}/status")
    public String updateApplicationStatus(
            @PathVariable Long applicationId,
            @RequestBody UpdateApplicationStatusRequest request) {

        return recruiterService.updateApplicationStatus(
                applicationId,
                request);
    }
}