package com.prasanna.jobportal.controller;

import com.prasanna.jobportal.dto.ChangePasswordRequest;
import com.prasanna.jobportal.dto.UpdateProfileRequest;
import com.prasanna.jobportal.entity.User;
import com.prasanna.jobportal.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/profile")
    public User getProfile(Authentication authentication) {

        return userService.getProfile(authentication.getName());

    }

    @PutMapping("/profile")
    public User updateProfile(
            Authentication authentication,
            @RequestBody UpdateProfileRequest request
    ) {

        return userService.updateProfile(
                authentication.getName(),
                request
        );

    }

    @PutMapping("/change-password")
    public String changePassword(
            Authentication authentication,
            @RequestBody ChangePasswordRequest request
    ) {

        userService.changePassword(
                authentication.getName(),
                request
        );

        return "Password changed successfully";

    }

}