package com.prasanna.jobportal.dto;

import com.prasanna.jobportal.entity.JobType;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateJobRequest {

    private String title;

    private String description;

    private String company;

    private String location;

    private Double salary;

    private JobType jobType;
}