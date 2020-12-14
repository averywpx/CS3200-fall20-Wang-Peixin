package com.example.wap.repositories;

import com.example.wap.models.Enrollment;
import com.example.wap.models.EnrollmentId;
import com.example.wap.models.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface EnrollmentRepository extends CrudRepository<Enrollment, EnrollmentId> {

    @Query("SELECT e FROM Enrollment e WHERE e.studentId=:studentId AND e.clubId=:clubId")
    Enrollment isPresident(
            @Param("studentId") Integer studentId,
            @Param("clubId") Integer clubId);
}
