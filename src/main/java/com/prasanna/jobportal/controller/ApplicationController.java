package com.prasanna.jobportal.controller;

import com.prasanna.jobportal.dto.ApplicationResponse;
import com.prasanna.jobportal.dto.ApplyJobRequest;
import com.prasanna.jobportal.entity.Application;
import com.prasanna.jobportal.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping("/apply")
    public String applyJob(
            @RequestBody ApplyJobRequest request) {

        return applicationService.applyJob(request);
    }
    @GetMapping("/my")
    public List<ApplicationResponse> getMyApplications(){
        return applicationService.getMyApplications();
    }
}