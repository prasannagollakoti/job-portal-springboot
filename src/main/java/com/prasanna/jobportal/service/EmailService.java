package com.prasanna.jobportal.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendStatusEmail(String toEmail,
                                String jobTitle,
                                String status) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(toEmail);
        message.setSubject("Application Status Update");

        message.setText(
                "Hello,\n\n" +
                        "Your application for the position '" +
                        jobTitle +
                        "' has been updated.\n\n" +
                        "Current Status: " +
                        status +
                        "\n\nBest wishes,\nJob Portal Team"
        );

        mailSender.send(message);
    }
}