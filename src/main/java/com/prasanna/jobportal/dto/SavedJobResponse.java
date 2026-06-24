package com.prasanna.jobportal.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SavedJobResponse {

    private Long id;      // SavedJob table id
    private Long jobId;   // Actual Job table id

    private String title;
    private String company;
    private String location;
    private Double salary;

}