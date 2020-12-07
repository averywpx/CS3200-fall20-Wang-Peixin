package com.example.wap.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="students")
public class Student {

    public List<Enrollment> getClubs() {
        return clubs;
    }

    public void setClubs(List<Enrollment> clubs) {
        this.clubs = clubs;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;
    private String username;
    private String password;
    private String phone;
    private String email;

    @OneToMany(mappedBy="student")
    private List<Enrollment> clubs;

    public Student() {
    }

    public Student(Integer id, String username, String password, String phone, String email) {
        this.studentId = id;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.email = email;
    }

    public Integer getStudentId() {

        return studentId;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public void setStudentId(Integer id) {
        this.studentId = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
