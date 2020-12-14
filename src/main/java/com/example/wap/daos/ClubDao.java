package com.example.wap.daos;

import com.example.wap.models.*;
import com.example.wap.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClubDao {
    @Autowired
    ClubRepository ClubRepository;

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    EnrollmentRepository enrollmentRepository;

    @Autowired
    SuggestionRepository SuggestionRepository;

    @Autowired
    MeetingRepository MeetingRepository;

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
        Club club = ClubRepository.findById(cid).get();
        List<Enrollment> unenroll = club.getStudents();
        for(Enrollment e: unenroll){
            EnrollmentId enrollmentId = new EnrollmentId();
            enrollmentId.setStudentId(e.getStudentId());
            enrollmentId.setClubId(e.getClubId());
            enrollmentRepository.deleteById(enrollmentId);
        }

        List<Suggestion> suggestions = club.getSuggestions();
        for(Suggestion s: suggestions){
            SuggestionRepository.deleteById(s.getId());
        }

        List<Meeting> meetings = club.getMeetings();
        for(Meeting m: meetings){
            MeetingRepository.deleteById(m.getId());
        }
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

    @GetMapping("/findClubsForStudent/{sid}")
    public List<Club> findClubsForStudent(
            @PathVariable("sid") Integer sid) {
        List<Enrollment> clubIds = studentRepository.findById(sid).get().getClubs();
        List<Club> clubs = new ArrayList<>();
        for (Enrollment e: clubIds){
            clubs.add(e.getClub());
        }

        return clubs;
    }
}
