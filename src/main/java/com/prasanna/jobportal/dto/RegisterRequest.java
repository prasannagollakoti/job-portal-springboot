package com.prasanna.jobportal.dto;

import com.prasanna.jobportal.entity.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private Role role;
}