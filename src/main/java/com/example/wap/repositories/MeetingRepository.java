package com.example.wap.repositories;

import com.example.wap.models.Meeting;
import org.springframework.data.repository.CrudRepository;

public interface MeetingRepository
        extends CrudRepository<Meeting, Integer> {
}
