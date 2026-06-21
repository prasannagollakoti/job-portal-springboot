package com.prasanna.jobportal.repository;

import com.prasanna.jobportal.entity.SavedJob;
import com.prasanna.jobportal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SavedJobRepository extends JpaRepository<SavedJob, Long> {

    List<SavedJob> findByUser(User user);

}