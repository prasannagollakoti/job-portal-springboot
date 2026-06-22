package com.prasanna.jobportal.dto;

import com.prasanna.jobportal.entity.ApplicationStatus;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateApplicationStatusRequest {

    private ApplicationStatus status;


}