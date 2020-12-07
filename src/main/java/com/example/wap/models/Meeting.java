package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name="meetings")
public class Meeting {
    @Id
    @Column(name="id")
    private Integer id;
    private String date;
    private String location;
    private String content;

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
}
