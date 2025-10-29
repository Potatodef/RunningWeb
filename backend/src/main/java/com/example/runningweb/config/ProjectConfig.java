package com.example.runningweb.config;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(
        basePackages = "com.example.runningweb.client"
)
public class ProjectConfig {
}
