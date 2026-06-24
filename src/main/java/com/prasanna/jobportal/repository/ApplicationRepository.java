package com.prasanna.jobportal.repository;

import com.prasanna.jobportal.entity.Application;
import com.prasanna.jobportal.entity.Job;
import com.prasanna.jobportal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ApplicationRepository
        extends JpaRepository<Application, Long> {

    List<Application> findByApplicant(User applicant);

    List<Application> findByJob(Job job);

    void deleteByJob(Job job);

    @Modifying
    @Transactional
    void deleteByApplicantId(Long applicantId);

}