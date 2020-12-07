package com.example.wap.daos;

import com.example.wap.models.Club;
import com.example.wap.models.Suggestion;
import com.example.wap.repositories.ClubRepository;
import com.example.wap.repositories.SuggestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SuggestionDao {
    @Autowired
    SuggestionRepository SuggestionRepository;
    @Autowired
    ClubRepository ClubRepository;
    @GetMapping("/findAllSuggestions")
    public Iterable<Suggestion> findAllSuggestions() {
        return SuggestionRepository.findAll();
    }
    @GetMapping("/findSuggestionById/{sid}")
    public Suggestion findSuggestionById(
            @PathVariable("sid") Integer sid) {
        return SuggestionRepository.findById(sid).get();
    }
    @GetMapping("/findSuggestionsForClub/{cid}")
    public List<Suggestion> findSuggestionsForClub(
            @PathVariable("cid") Integer cid) {
        return ClubRepository.findById(cid).get().getSuggestions();
    }
    @GetMapping("/createSuggestionForClub/{cid}")
    public Suggestion createSuggestionForClub(
            @PathVariable("cid") Integer cid) {
        Club Club = ClubRepository.findById(cid).get();
        Suggestion Suggestion = new Suggestion();
        Suggestion.setTitle("New Suggestion");
        Suggestion.setClub(Club);
        SuggestionRepository.save(Suggestion);
        return Suggestion;
    }
    @GetMapping("/deleteSuggestion/{sid}")
    public void deleteSuggestion(
            @PathVariable("sid") Integer sid) {
        SuggestionRepository.deleteById(sid);
    }
    @GetMapping("/updateSuggestion/{sid}/{newName}")
    public Suggestion updateSuggestion(
            @PathVariable("sid") Integer sid,
            @PathVariable("newName") String newName) {
        Suggestion Suggestion = SuggestionRepository.findById(sid).get();
        Suggestion.setTitle(newName);
        SuggestionRepository.save(Suggestion);
        return Suggestion;
    }
}
