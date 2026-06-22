package com.prasanna.jobportal.service;

import com.prasanna.jobportal.entity.User;
import com.prasanna.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.File;
import java.io.IOException;

@Service
@RequiredArgsConstructor
public class ResumeService {

    private final UserRepository userRepository;

    public String uploadResume(MultipartFile file) {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow();

        String uploadDir = "C:/Users/laksh/Documents/jobportal/uploads/";

        File directory = new File(uploadDir);

        if (!directory.exists()) {
            directory.mkdirs();
        }

        String fileName = file.getOriginalFilename();

        try {
            File destination = new File(uploadDir + fileName);

            System.out.println("Saving to : " + destination.getAbsolutePath());

            file.transferTo(destination);

        }
        catch (IOException e) {

            e.printStackTrace();

            throw new RuntimeException("Failed to upload resume");
        }
        user.setResumeFileName(fileName);
        user.setResumePath(uploadDir + fileName);

        userRepository.save(user);

        return "Resume uploaded successfully";
    }
    public ResponseEntity<Resource> downloadResume(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        try {

            Path path = Paths.get(user.getResumePath());

            Resource resource = new UrlResource(path.toUri());

            if (!resource.exists()) {
                throw new RuntimeException("Resume not found");
            }

            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\"" +
                                    user.getResumeFileName() + "\""
                    )
                    .body(resource);

        } catch (MalformedURLException e) {

            throw new RuntimeException("Error downloading resume");
        }
    }
}