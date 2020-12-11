package com.example.wap.daos;

import com.example.wap.models.Club;
import com.example.wap.models.Enrollment;
import com.example.wap.models.EnrollmentId;
import com.example.wap.models.Student;
import com.example.wap.repositories.ClubRepository;
import com.example.wap.repositories.EnrollmentRepository;
import com.example.wap.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EnrollmentDao {
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    ClubRepository clubRepository;
    @Autowired
    EnrollmentRepository enrollmentRepository;

    @GetMapping("/enrollStudent/{sid}/InClub/{cid}")
    public Enrollment enrollStudentInClub(
            @PathVariable("sid") Integer studentId,
            @PathVariable("cid") Integer clubId){

        Enrollment enrollment = new Enrollment();
        Club club = clubRepository.findById(clubId).get();
        Student student = studentRepository.findById(studentId).get();
        enrollment.setStudentId(studentId);
        enrollment.setClubId(clubId);
        enrollment.setStudent(student);
        enrollment.setClub(club);
        enrollmentRepository.save(enrollment);
        return enrollment;
    }

    @GetMapping("/unenroll/{sid}/from/{cid}")
    public void unenrollStudentFromClub(
            @PathVariable("sid") Integer studentId,
            @PathVariable("cid") Integer clubId){

        EnrollmentId enrollmentId = new EnrollmentId();
        enrollmentId.setStudentId(studentId);
        enrollmentId.setClubId(clubId);
        enrollmentRepository.deleteById(enrollmentId);
    }

    @GetMapping("/findAllEnrollment")
    public Iterable<Enrollment> findEnrollments() {
        return enrollmentRepository.findAll();
    }
}
