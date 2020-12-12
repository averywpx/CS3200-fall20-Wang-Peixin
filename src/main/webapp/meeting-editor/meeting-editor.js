class MeetingEditor extends React.Component {
    state = {
        meeting: {},
        clubId: 0
    }

    findMeetingById = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const meetingId = search[1]
        const cid = search[2]
        findMeetingById(meetingId)
            .then(meeting => this.setState({
                clubId: cid,
                meeting: meeting}))
    }
    componentDidMount = () => this.findMeetingById()

    submitForm = () => {
        updateMeeting(this.state.meeting)
            .then(this.findMeetingById)
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Meeting Editor</h1>
                <form>
                    <input
                        readOnly={true}
                        className="form-control"
                        value={this.state.meeting.id}/>
                    <input
                        onChange={
                            (event) => {
                                this.setState({
                                    meeting: {
                                        ...this.state.meeting,
                                        title: event.target.value
                                    }
                                })
                            }}
                        className="form-control"
                        value={this.state.meeting.title}/>
                    <a href={`../../club-editor/club-editor.html?clubId=${this.state.clubId}`}>
                        Back
                    </a>
                    <br/>
                    <button
                        type="button"
                        onClick={() => this.submitForm()}
                        className="btn btn-success">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(
    <MeetingEditor/>,
    document.getElementById("root")
)
