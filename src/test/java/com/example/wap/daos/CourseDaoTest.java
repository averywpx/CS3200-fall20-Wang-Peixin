package com.example.wap.daos;

import com.example.wap.models.Club;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class ClubDaoTest {
    @Autowired
    ClubDao dao;

    @Test
    void findAllClubs() {
        Iterable<Club> Clubs = dao.findAllClubs();
        for(Club Club: Clubs) {
            System.out.println(Club);
        }
    }

    @Test
    void findClubById() {
    }

    @Test
    void createClub() {
    }

    @Test
    void updateClub() {
    }

    @Test
    void deleteClub() {
    }
}
