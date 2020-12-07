package com.example.wap.models;

import java.io.Serializable;

public class EnrollmentId implements Serializable {

    public Integer getClubId() {
        return clubId;
    }

    public void setClubId(Integer clubId) {
        this.clubId = clubId;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    private Integer clubId;
    private Integer studentId;


}
