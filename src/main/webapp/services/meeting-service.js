const FIND_ALL_MEETINGS  = "http://localhost:8080/findAllMeetings"
const FIND_MEETINGS_FOR_CLUB = "http://localhost:8080/findMeetingsForClub"
const CREATE_MEETING_URL = "http://localhost:8080/createMeetingForClub"
const DELETE_MEETING_URL = "http://localhost:8080/deleteMeeting"
const FIND_MEETING_BY_ID = "http://localhost:8080/findMeetingById"
const UPDATE_MEETING     = "http://localhost:8080/updateMeeting"

const findAllMeetings = () =>
    fetch(`${FIND_ALL_MEETINGS}`)
        .then(response => response.json())

const findMeetingsForClub = (clubId) =>
    fetch(`${FIND_MEETINGS_FOR_CLUB}/${clubId}`)
        .then(response => response.json())

const createMeeting = (cid) =>
    fetch(`${CREATE_MEETING_URL}/${cid}`)
        .then(response => response.json())

const deleteMeeting = (meetingId) =>
    fetch(`${DELETE_MEETING_URL}/${meetingId}`)

const findMeetingById = (meetingId) =>
    fetch(`${FIND_MEETING_BY_ID}/${meetingId}`)
        .then(response => response.json())

const updateMeeting = (meeting) =>
    fetch(`${UPDATE_MEETING}/${meeting.id}/${meeting.title}/${meeting.date}/${meeting.location}/${meeting.content}`)
        .then(response => response.json())