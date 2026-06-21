package com.prasanna.jobportal.dto;

import com.prasanna.jobportal.entity.ApplicationStatus;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ApplicationResponse {

    private Long id;
    private String jobTitle;
    private String company;
    private ApplicationStatus status;
    private LocalDateTime appliedAt;

}