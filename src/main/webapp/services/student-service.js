const FIND_ALL_STUDENTS  = "http://localhost:8080/findAllStudents"
const FIND_STUDENTS_FOR_CLUB = "http://localhost:8080/findStudentsForClub"
const CREATE_STUDENT_URL = "http://localhost:8080/createStudent"
const DELETE_STUDENT_URL = "http://localhost:8080/deleteStudent"
const FIND_STUDENT_BY_ID = "http://localhost:8080/findStudentById"
const UPDATE_STUDENT     = "http://localhost:8080/updateStudent"
const UNENROLL_STUDENT   = "http://localhost:8080/unenroll"
const REGISTER           = "http://localhost:8080/register"
const LOGIN              = "http://localhost:8080/login"
const IS_PRESIDENT        = "http://localhost:8080/isPresident"


const findAllStudents = () =>
    fetch(`${FIND_ALL_STUDENTS}`)
        .then(response => response.json())

const findStudentsForClub = (clubId) =>
    fetch(`${FIND_STUDENTS_FOR_CLUB}/${clubId}`)
        .then(response => response.json())

const createStudent = () =>
    fetch(`${CREATE_STUDENT_URL}`)
        .then(response => response.json())

const register = (username, password) =>
    fetch(`${REGISTER}/${username}/${password}`)
        .then(response => response.json())

const login = (username, password) =>
    fetch(`${LOGIN}/${username}/${password}`)
        .then(response => response.json())

const deleteStudent = (studentId) =>
    fetch(`${DELETE_STUDENT_URL}/${studentId}`)

const findStudentById = (studentId) =>
    fetch(`${FIND_STUDENT_BY_ID}/${studentId}`)
        .then(response => response.json())

const updateStudent = (student) =>
    fetch(`${UPDATE_STUDENT}/${student.studentId}/${student.username}/${student.password}/${student.phone}/${student.email}`)
        .then(response => response.json())

const unenrollStudnet = (sid, cid) =>
    fetch((`${UNENROLL_STUDENT}/${sid}/from/${cid}`))
        .then(response => response.json())

const isPresident = (sid, cid) =>
    fetch((`${IS_PRESIDENT}/${sid}/in/${cid}`))
        .then(response => response.json())
