package com.example.wap.daos;

import com.example.wap.models.Club;
import com.example.wap.models.Meeting;
import com.example.wap.repositories.ClubRepository;
import com.example.wap.repositories.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MeetingDao {
    @Autowired
    MeetingRepository MeetingRepository;
    @Autowired
    ClubRepository ClubRepository;
    @GetMapping("/findAllMeetings")
    public Iterable<Meeting> findAllMeetings() {
        return MeetingRepository.findAll();
    }
    @GetMapping("/findMeetingById/{mid}")
    public Meeting findMeetingById(
            @PathVariable("mid") Integer mid) {
        return MeetingRepository.findById(mid).get();
    }
    @GetMapping("/findMeetingsForClub/{cid}")
    public List<Meeting> findMeetingsForClub(
            @PathVariable("cid") Integer cid) {
        return ClubRepository.findById(cid).get().getMeetings();
    }
    @GetMapping("/createMeetingForClub/{cid}")
    public Meeting createMeetingForClub(
            @PathVariable("cid") Integer cid) {
        Club Club = ClubRepository.findById(cid).get();
        Meeting Meeting = new Meeting();
        Meeting.setTitle("New Meeting");
        Meeting.setClub(Club);
        MeetingRepository.save(Meeting);
        return Meeting;
    }
    @GetMapping("/deleteMeeting/{mid}")
    public void deleteMeeting(
            @PathVariable("mid") Integer mid) {
        MeetingRepository.deleteById(mid);
    }
    @GetMapping("/updateMeeting/{mid}/{newName}/{date}/{location}/{content}")
    public Meeting updateMeeting(
            @PathVariable("mid") Integer mid,
            @PathVariable("newName") String newName,
            @PathVariable("date") String date,
            @PathVariable("location") String location,
            @PathVariable("content") String content) {
        Meeting Meeting = MeetingRepository.findById(mid).get();
        Meeting.setTitle(newName);
        Meeting.setContent(content);
        Meeting.setDate(date);
        Meeting.setLocation(location);
        MeetingRepository.save(Meeting);
        return Meeting;
    }
}
