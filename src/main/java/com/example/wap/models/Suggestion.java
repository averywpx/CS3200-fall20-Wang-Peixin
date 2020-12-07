package com.example.wap.models;

import javax.persistence.Column;
import javax.persistence.Id;

import javax.persistence.*;

@Entity
@Table(name="suggestions")
public class Suggestion {

    @Id
    @Column(name="id")
    private Integer id;
    private String title;
    private String description;

    public Suggestion(Integer id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public Suggestion() {
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }
}
