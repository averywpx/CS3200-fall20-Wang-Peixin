class MeetingEditor extends React.Component {
    state = {
        meeting: {},
        clubId: 0,
        isPresident: false
    }

    findMeetingById = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const meetingId = search[1]
        const cid = search[2]
        const sid = search[3]
        this.isPresident(sid, cid)
        findMeetingById(meetingId)
            .then(meeting => this.setState({
                clubId: cid,
                meeting: meeting}))

    }

    isPresident = (studentId, clubId) => {
        isPresident(studentId, clubId).then(b => {
            if (b) {
                this.setState({
                    isPresident: b
                })
            }}
        )
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
                    {/*<input*/}
                    {/*    readOnly={true}*/}
                    {/*    className="form-control"*/}
                    {/*    value={this.state.meeting.id}/>*/}

                    {!this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input
                                readOnly={true}
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
                        </div>
                    </div>
                    }

                    {this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
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
                        </div>
                    </div>}

                    {!this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">When</label>
                        <div className="col-sm-10">
                            <input
                                readOnly={true}
                                onChange={
                                    (event) => {
                                        this.setState({
                                            meeting: {
                                                ...this.state.meeting,
                                                date: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.meeting.date}/>
                        </div>
                    </div>
                    }

                    {this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">When</label>
                        <div className="col-sm-10">
                            <input
                                onChange={
                                    (event) => {
                                        this.setState({
                                            meeting: {
                                                ...this.state.meeting,
                                                date: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.meeting.date}/>
                        </div>
                    </div>}

                    {!this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Location</label>
                        <div className="col-sm-10">
                            <input
                                readOnly={true}
                                onChange={
                                    (event) => {
                                        this.setState({
                                            meeting: {
                                                ...this.state.meeting,
                                                location: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.meeting.location}/>
                        </div>
                    </div>
                    }

                    {this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Location</label>
                        <div className="col-sm-10">
                            <input
                                onChange={
                                    (event) => {
                                        this.setState({
                                            meeting: {
                                                ...this.state.meeting,
                                                location: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.meeting.location}/>
                        </div>
                    </div>}

                    {!this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Content</label>
                        <div className="col-sm-10">
                            <input
                                readOnly={true}
                                onChange={
                                    (event) => {
                                        this.setState({
                                            meeting: {
                                                ...this.state.meeting,
                                                content: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.meeting.content}/>
                        </div>
                    </div>
                    }

                    {this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Content</label>
                        <div className="col-sm-10">
                            <input
                                onChange={
                                    (event) => {
                                        this.setState({
                                            meeting: {
                                                ...this.state.meeting,
                                                content: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.meeting.content}/>
                        </div>
                    </div>}





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
