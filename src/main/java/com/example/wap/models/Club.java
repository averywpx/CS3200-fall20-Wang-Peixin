package com.example.wap.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="clubs")
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clubId;
    private String name;
    private String description;


    @OneToMany(mappedBy = "club")
    private List<Meeting> meetings;

    @OneToMany(mappedBy="club")
    private List<Enrollment> students;

    public List<Suggestion> getSuggestions() {
        return suggestions;
    }

    public void setSuggestions(List<Suggestion> suggestions) {
        this.suggestions = suggestions;
    }

    @OneToMany(mappedBy = "club")
    private List<Suggestion> suggestions;

    public Club() {
    }

    public Club(Integer id, String name, String description) {
        this.clubId = id;
        this.name = name;
        this.description = description;
    }

    public void setClubId(Integer id) {
        this.clubId = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getClubId() {
        return clubId;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public List<Meeting> getMeetings() {
        return meetings;
    }

    public void setMeetings(List<Meeting> meetings) {
        this.meetings = meetings;
    }

    public List<Enrollment> getStudents() {
        return students;
    }

    public void setStudents(List<Enrollment> students) {
        this.students = students;
    }
}
