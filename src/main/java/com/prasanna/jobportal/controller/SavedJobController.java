package com.prasanna.jobportal.controller;

import com.prasanna.jobportal.dto.SavedJobResponse;
import com.prasanna.jobportal.entity.SavedJob;
import com.prasanna.jobportal.service.SavedJobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/saved-jobs")
@RequiredArgsConstructor
public class SavedJobController {

    private final SavedJobService savedJobService;

    @PostMapping("/save/{jobId}")
    public String saveJob(@PathVariable Long jobId) {
        return savedJobService.saveJob(jobId);
    }

    @GetMapping("/my")
    public List<SavedJobResponse> getSavedJobs() {

        return savedJobService.getSavedJobs();

    }
}