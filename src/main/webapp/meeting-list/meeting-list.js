class MeetingList extends React.Component {
    state = {
        meetings: []
    }

    findAllMeetings = () =>
        findAllMeetings()
            .then((meetings) => this.setState({meetings}))

    findMeetingsForClub = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const clubId = search[1]
        console.log(clubId)
        findMeetingsForClub(clubId)
            .then(meetings => this.setState({meetings}))
    }

    createMeeting = () =>
        createMeeting()
            .then(() => this.findMeetingsForClub())

    deleteMeeting = (meetingId) =>
        deleteMeeting(meetingId)
            .then(() => this.findMeetingsForClub())

    componentDidMount = () => {
        // let search = window.location.search
        // if(search) {
        //     this.findMeetingsForClub()
        // } else {
        //     this.findAllMeetings()
        // }
        this.findMeetingsForClub().then(meetings => console.log(meetings))
    }

    render() {
        return(
            <div className="container-fluid">
                <button
                    className="btn btn-success float-right"
                    onClick={() => this.createMeeting()}>
                    Create
                </button>
                <a className="btn btn-danger float-right"
                   href="../../index.html">
                    Home
                </a>
                <h1>Meeting List1</h1>
                <table className="table">
                    <tbody>
                    {
                        this.state.meetings.map((meeting) =>
                            <tr key={meeting.meetingId}>
                                <td>{meeting.meetingId}</td>
                                <td>{meeting.title}</td>
                                <td>
                                    <a className="btn btn-primary float-right"
                                       href={`/Meeting-editor/Meeting-editor.html?MeetingId=${meeting.meetingId}`}>
                                        Edit
                                    </a>
                                    <button className="btn btn-danger float-right"
                                            onClick={() => this.deleteMeeting(meeting.meetingId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(
    <MeetingList />,
    document.getElementById('root')
)

