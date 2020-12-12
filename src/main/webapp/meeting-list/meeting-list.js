class MeetingList extends React.Component {

    state = {
        meetings: [],
        cid: 0
    }
    
    findAllMeetings = () =>
        findAllMeetings()
            .then((meetings) => this.setState({meetings}))

    // componentDidMount = () =>
    //     this.findAllMeetings().then(meetings => console.log(meetings))

    findMeetingsForClub = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const clubId = search[1]
        findMeetingsForClub(clubId)
            .then(meetings => this.setState({
                cid: clubId,
                meetings: meetings}))
    }

    createMeeting = () => {
        console.log(this.state)
        createMeeting(this.state.cid)
            .then(() => this.findMeetingsForClub())
    }
    deleteMeeting = (meetingId) =>
        deleteMeeting(meetingId)
            .then(() => this.findMeetingsForClub())

    componentDidMount = () => {
        let search = window.location.search
        if(search) {
            this.findMeetingsForClub()

        } else {
            this.findAllMeetings()
        }
    }

    render() {
        return (
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
                <h1>Meeting List</h1>

                <table className="table">
                    <tbody>
                    {
                        this.state.meetings.map((meeting) =>
                            <tr key={meeting.id}>
                                <td>{meeting.id}</td>
                                <td>{meeting.title}</td>
                                <td>
                                    <a className="btn btn-primary float-right"
                                       href={`../../meeting-editor/meeting-editor.html?meetingId=${meeting.id}=${this.state.cid}`}>
                                        Edit
                                    </a>
                                    <button className="btn btn-danger float-right"
                                            onClick={() => this.deleteMeeting(meeting.id)}>
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
    <MeetingList/>,
    document.getElementById('root')
)