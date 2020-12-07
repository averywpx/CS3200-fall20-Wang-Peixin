package com.example.wap.repositories;

import com.example.wap.models.Enrollment;
import com.example.wap.models.EnrollmentId;
import org.springframework.data.repository.CrudRepository;

public interface EnrollmentRepository extends CrudRepository<Enrollment, EnrollmentId> {
}
