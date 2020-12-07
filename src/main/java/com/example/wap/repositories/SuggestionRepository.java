package com.example.wap.repositories;

import com.example.wap.models.Suggestion;
import org.springframework.data.repository.CrudRepository;

public interface SuggestionRepository
        extends CrudRepository<Suggestion, Integer> {
}