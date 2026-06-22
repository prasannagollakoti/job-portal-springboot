package com.prasanna.jobportal.dto;

import com.prasanna.jobportal.entity.ApplicationStatus;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ApplicantResponse {

    private Long applicationId;
    private String applicantName;
    private String email;
    private ApplicationStatus status;

}