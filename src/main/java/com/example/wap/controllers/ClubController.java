package com.example.wap.controllers;

import com.example.wap.models.Club;
import com.example.wap.repositories.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClubController {
    @Autowired
    ClubRepository ClubRepository;
    @GetMapping("/api/Clubs")
    public List<Club> findAllClubs() {
        return (List<Club>) ClubRepository.findAll();
    }
}
