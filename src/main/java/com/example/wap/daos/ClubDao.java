package com.example.wap.daos;

import com.example.wap.models.Club;
import com.example.wap.repositories.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClubDao {
    @Autowired
    ClubRepository ClubRepository;

    @GetMapping("/findAllClubs")
    public Iterable<Club> findAllClubs() {
        return ClubRepository.findAll();
    }

    @GetMapping("/findClubById/{cid}")
    public Club findClubById(@PathVariable("cid") Integer cid) {
        return ClubRepository.findById(cid).get();
    }

    @GetMapping("/deleteClub/{cid}")
    public void deleteClub(@PathVariable("cid") Integer cid) {
        ClubRepository.deleteById(cid);
    }

    //    @GetMapping("/createClub")
//    public Club createClub( @RequestBody Club newClub) {
//
//        return ClubRepository.save(newClub);
//    }
    @GetMapping("/createClub")
    public Club createClub() {
        Club newClub = new Club();
        newClub.setName("New Club");

        return ClubRepository.save(newClub);
    }

    @GetMapping("/updateClub/{clubId}/{newName}")
    public Club updateClub(
            @PathVariable("clubId") Integer clubId,
            @PathVariable("newName") String newName) {
        Club club = ClubRepository.findById(clubId).get();
        club.setName(newName);
        return ClubRepository.save(club);
    }
}
