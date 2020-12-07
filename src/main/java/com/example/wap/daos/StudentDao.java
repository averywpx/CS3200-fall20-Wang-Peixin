package com.example.wap.daos;

import com.example.wap.models.Student;
import com.example.wap.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentDao {
    @Autowired
    StudentRepository StudentRepository;

    @GetMapping("/findAllStudents")
    public Iterable<Student> findAllStudents() {
        return StudentRepository.findAll();
    }

    @GetMapping("/findStudentById/{cid}")
    public Student findStudentById(@PathVariable("cid") Integer cid) {
        return StudentRepository.findById(cid).get();
    }

    @GetMapping("/deleteStudent/{cid}")
    public void deleteStudent(@PathVariable("cid") Integer cid) {
        StudentRepository.deleteById(cid);
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

    @GetMapping("/updateStudent/{StudentId}/{newName}")
    public Student updateStudent(
            @PathVariable("StudentId") Integer StudentId,
            @PathVariable("newName") String newName) {
        Student Student = StudentRepository.findById(StudentId).get();
        Student.setUsername(newName);
        return StudentRepository.save(Student);
    }
}

