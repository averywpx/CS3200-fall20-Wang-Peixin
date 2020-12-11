package com.example.wap.daos;

import com.example.wap.models.Enrollment;
import com.example.wap.models.Student;
import com.example.wap.models.Suggestion;
import com.example.wap.repositories.ClubRepository;
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

