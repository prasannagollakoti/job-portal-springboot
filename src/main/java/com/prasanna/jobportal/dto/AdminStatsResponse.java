package com.prasanna.jobportal.dto;

public class AdminStatsResponse {

    private long totalUsers;
    private long totalJobs;
    private long totalApplications;

    public AdminStatsResponse() {
    }

    public AdminStatsResponse(long totalUsers, long totalJobs, long totalApplications) {
        this.totalUsers = totalUsers;
        this.totalJobs = totalJobs;
        this.totalApplications = totalApplications;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalJobs() {
        return totalJobs;
    }

    public void setTotalJobs(long totalJobs) {
        this.totalJobs = totalJobs;
    }

    public long getTotalApplications() {
        return totalApplications;
    }

    public void setTotalApplications(long totalApplications) {
        this.totalApplications = totalApplications;
    }
}