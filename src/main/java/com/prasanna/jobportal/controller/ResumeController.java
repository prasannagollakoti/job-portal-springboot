package com.prasanna.jobportal.controller;

import com.prasanna.jobportal.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
@RestController
@RequestMapping("/resume")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping("/upload")
    public String uploadResume(
            @RequestParam("file") MultipartFile file) {

        return resumeService.uploadResume(file);
    }
    @GetMapping("/download/{userId}")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable Long userId) {

        return resumeService.downloadResume(userId);
    }
}