package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="enrollments")
@IdClass(EnrollmentId.class)
public class Enrollment {
    @Id
    private Integer studentId;

    @Id
    private Integer clubId;

    private boolean isPresident;

    @ManyToOne
    @PrimaryKeyJoinColumn(name="studentId", referencedColumnName="studentId")
    @JsonIgnore
    private Student student;

    @ManyToOne
    @PrimaryKeyJoinColumn(name="clubId", referencedColumnName="clubId")
    @JsonIgnore
    private Club club;

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public Integer getClubId() {
        return clubId;
    }

    public void setClubId(Integer clubId) {
        this.clubId = clubId;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }





    public boolean isPresident() {
        return isPresident;
    }

    public void setPresident(boolean president) {
        isPresident = president;
    }
}

