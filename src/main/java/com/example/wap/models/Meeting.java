package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="meetings")
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    private String title;


    private String date;
    private String location;
    private String content;



    @ManyToOne
    @JsonIgnore
    private Club club;

    public Meeting() {
    }

    public Meeting(Integer id, String date, String location, String content) {
        this.id = id;
        this.date = date;
        this.location = location;
        this.content = content;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getLocation() {
        return location;
    }

    public String getContent() {
        return content;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
