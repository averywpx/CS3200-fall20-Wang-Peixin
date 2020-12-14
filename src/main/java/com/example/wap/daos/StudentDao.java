package com.example.wap.daos;

import com.example.wap.models.Enrollment;
import com.example.wap.models.EnrollmentId;
import com.example.wap.models.Student;
import com.example.wap.models.Suggestion;
import com.example.wap.repositories.ClubRepository;
import com.example.wap.repositories.EnrollmentRepository;
import com.example.wap.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentDao {
    @Autowired
    StudentRepository StudentRepository;
    
    @Autowired
    ClubRepository ClubRepository;

    @Autowired
    EnrollmentRepository enrollmentRepository;

    @GetMapping("/findAllStudents")
    public Iterable<Student> findAllStudents() {
        return StudentRepository.findAll();
    }

    @GetMapping("/findStudentById/{sid}")
    public Student findStudentById(@PathVariable("sid") Integer sid) {
        return StudentRepository.findById(sid).get();
    }

    @GetMapping("/deleteStudent/{sid}")
    public void deleteStudent(@PathVariable("sid") Integer sid) {
        Student student = StudentRepository.findById(sid).get();
        List<Enrollment> unenroll = student.getClubs();
        for(Enrollment e: unenroll){
            EnrollmentId enrollmentId = new EnrollmentId();
            enrollmentId.setStudentId(e.getStudentId());
            enrollmentId.setClubId(e.getClubId());
            enrollmentRepository.deleteById(enrollmentId);
        }


        StudentRepository.deleteById(sid);
    }

    //    @GetMapping("/createStudent")
//    public Student createStudent( @RequestBody Student newStudent) {
//
//        return StudentRepository.save(newStudent);
//    }
    @GetMapping("/createStudent")
    public Student createStudent() {
        Student newStudent = new Student();
        newStudent.setUsername("New Student");

        return StudentRepository.save(newStudent);
    }

    @GetMapping("/register/{username}/{password}")
    public Student register(@PathVariable("username") String username,
                            @PathVariable("password") String password) {
        Student newStudent = new Student();
        newStudent.setUsername(username);
        newStudent.setPassword(password);

        return StudentRepository.save(newStudent);
    }

    @GetMapping("/login/{username}/{password}")
    public Student login(@PathVariable("username") String username,
                         @PathVariable("password") String password) {
        Student student = StudentRepository.findUserByCredentials(username, password);

        return student;
    }

    @GetMapping("/updateStudent/{StudentId}/{newName}/{password}/{phone}/{email}")
    public Student updateStudent(
            @PathVariable("StudentId") Integer StudentId,
            @PathVariable("newName") String newName,
            @PathVariable("password") String password,
            @PathVariable("phone") String phone,
            @PathVariable("email") String email) {
        Student Student = StudentRepository.findById(StudentId).get();
        Student.setUsername(newName);
        Student.setPassword(password);
        Student.setPhone(phone);
        Student.setEmail(email);
        return StudentRepository.save(Student);
    }
    
    @GetMapping("/findStudentsForClub/{cid}")
    public List<Student> findStudentsForClub(
            @PathVariable("cid") Integer cid) {
        List<Enrollment> studentIds = ClubRepository.findById(cid).get().getStudents();
        List<Student> students = new ArrayList<>();
        for (Enrollment e: studentIds){
            students.add(e.getStudent());
        }

        return students;
    }
//@GetMapping("/findStudentsForClub/{cid}")
//public List<Enrollment> findStudentsForClub(
//        @PathVariable("cid") Integer cid) {
//    List<Enrollment> studentIds = ClubRepository.findById(cid).get().getStudents();
//
//    return studentIds;
//}
}

