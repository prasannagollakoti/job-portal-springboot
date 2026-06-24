package com.prasanna.jobportal.repository;

import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.entity.SavedJob;
import com.prasanna.jobportal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SavedJobRepository extends JpaRepository<SavedJob, Long> {

    List<SavedJob> findByUser(User user);

    void deleteByJob(Job job);

    Optional<SavedJob> findByUserAndJob(User user, Job job);

}