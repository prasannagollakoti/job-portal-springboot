package com.prasanna.jobportal.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "jobs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    private String company;

    private String location;

    private Double salary;

    @Enumerated(EnumType.STRING)
    private JobType jobType;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "recruiter_id")
    private User recruiter;
}