package com.example.wap.repositories;

import com.example.wap.models.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface StudentRepository
        extends CrudRepository<Student, Integer> {

    @Query("SELECT s FROM Student s WHERE s.username=:username AND s.password=:password")
    Student findUserByCredentials(
            @Param("username") String username,
            @Param("password") String password);
}