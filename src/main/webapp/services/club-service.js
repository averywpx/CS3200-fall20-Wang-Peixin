const FIND_ALL_CLUBS  = "http://localhost:8080/findAllClubs"
const FIND_CLUB_BY_ID = "http://localhost:8080/findClubById"
const CREATE_CLUB_URL = "http://localhost:8080/createClub"
const DELETE_CLUB_URL = "http://localhost:8080/deleteClub"
const UPDATE_CLUB     = "http://localhost:8080/updateClub"

const findAllClubs = () =>
    fetch(`${FIND_ALL_CLUBS}`)
        .then(response => response.json())

const findClubById = (ClubId) =>
    fetch(`${FIND_CLUB_BY_ID}/${ClubId}`)
        .then(response => response.json())

const createClub = (Club) =>
    fetch(`${CREATE_CLUB_URL}`)
        .then(response => response.json())

const deleteClub = (ClubId) =>
    fetch(`${DELETE_CLUB_URL}/${ClubId}`)

const updateClub = (club) =>
    fetch(`${UPDATE_CLUB}/${club.clubId}/${club.name}`)
        .then(response => response.json())