const FIND_ALL_SUGGESTIONS  = "http://localhost:8080/findAllSuggestions"
const FIND_SUGGESTIONS_FOR_CLUB = "http://localhost:8080/findSuggestionsForClub"
const CREATE_SUGGESTION_URL = "http://localhost:8080/createSuggestionForClub"
const DELETE_SUGGESTION_URL = "http://localhost:8080/deleteSuggestion"
const FIND_SUGGESTION_BY_ID = "http://localhost:8080/findSuggestionById"
const UPDATE_SUGGESTION     = "http://localhost:8080/updateSuggestion"


const findAllSuggestions = () =>
    fetch(`${FIND_ALL_SUGGESTIONS}`)
        .then(response => response.json())

const findSuggestionsForClub = (clubId) =>
    fetch(`${FIND_SUGGESTIONS_FOR_CLUB}/${clubId}`)
        .then(response => response.json())

const createSuggestion = (cid) =>
    fetch(`${CREATE_SUGGESTION_URL}/${cid}`)
        .then(response => response.json())

const deleteSuggestion = (SuggestionId) =>
    fetch(`${DELETE_SUGGESTION_URL}/${SuggestionId}`)

const findSuggestionById = (SuggestionId) =>
    fetch(`${FIND_SUGGESTION_BY_ID}/${SuggestionId}`)
        .then(response => response.json())

const updateSuggestion = (suggestion) =>
    fetch(`${UPDATE_SUGGESTION}/${suggestion.id}/${suggestion.title}/${suggestion.description}`)
        .then(response => response.json())