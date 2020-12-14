const FIND_ALL_CLUBS  = "http://localhost:8080/findAllClubs"
const FIND_CLUB_BY_ID = "http://localhost:8080/findClubById"
const CREATE_CLUB_URL = "http://localhost:8080/createClub"
const DELETE_CLUB_URL = "http://localhost:8080/deleteClub"
const UPDATE_CLUB     = "http://localhost:8080/updateClub"
const FIND_CLUBS_FOR_STUDENT = "http://localhost:8080/findClubsForStudent"
const ENROLL_STUDENT  = "http://localhost:8080/enrollStudent"

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

const findClubsForStudent = (sid) =>
    fetch(`${FIND_CLUBS_FOR_STUDENT}/${sid}`)
        .then(response => response.json())

const enrollStudent = (sid, cid, isPresident) =>
    fetch(`${ENROLL_STUDENT}/${sid}/InClub/${cid}/${isPresident}`)
        .then(response => response.json())
