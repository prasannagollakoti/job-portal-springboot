package com.prasanna.jobportal.repository;

import com.prasanna.jobportal.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import com.prasanna.jobportal.entity.User;
import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByLocation(String location);

    List<Job> findByCompany(String company);

    List<Job> findByTitleContainingIgnoreCase(String keyword);
    List<Job> findByRecruiter(User recruiter);
}