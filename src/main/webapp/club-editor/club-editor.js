class ClubEditor extends React.Component {
    state = {
        club: {},
        sid: 0,
        isPresident: false
    }

    componentDidMount = () => this.findClubById()

    findClubById = () => {
        let search = window.location.search.split("=")
        const clubId = search[1]
        const studentId = search[2]
        this.setState({sid: studentId})
        this.isPresident(studentId, clubId)
        findClubById(clubId)
            .then(club => this.setState({club: club}))
        console.log(studentId)
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

    deleteClub = (clubId) => {

        deleteClub(clubId)
            .then(() => this.findAllClubs())
    }

    submitForm = () =>
        updateClub(this.state.club)
            .then(this.findClubById)

    render() {
        return(
            <div className="container-fluid">
                <h1>Club Editor {this.state.club.name}</h1>
                <form>
                    {/*<input*/}
                    {/*    value={this.state.club.clubId}*/}
                    {/*    className="form-control"*/}
                    {/*    readOnly={true}/>*/}

                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Club Name</label>
                        <div className="col-sm-10">
                    <input
                        onChange={
                            (event) =>
                                this.setState({
                                    club: {...this.state.club, name: event.target.value}
                                })}
                        className="form-control"
                        value={this.state.club.name}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input
                                onChange={
                                    (event) =>
                                        this.setState({
                                            club: {...this.state.club, description: event.target.value}
                                        })}
                                className="form-control"
                                value={this.state.club.description}/>
                        </div>
                    </div>


                    <button
                        type="button"
                        onClick={() => this.submitForm()}
                        className="btn btn-success">
                        Save
                    </button>
                    <a className="btn btn-danger" href="../../club-list/club-list.html">
                        Back
                    </a>
                </form>
                <a href={`../../meeting-list/meeting-list.html?clubId=${this.state.club.clubId}=${this.state.sid}`}>
                    <button className="btn btn-primary float-right">
                    Meetings
                </button>
                </a>
                <a href={`../../suggestion-list/suggestion-list.html?clubId=${this.state.club.clubId}=${this.state.sid}`}>
                    <button className="btn btn-primary float-right">
                    Suggestions
                    </button>
                </a>
                <a href={`../../student-list/student-list.html?clubId=${this.state.club.clubId}=${this.state.sid}`}>
                    <button className="btn btn-primary float-right">
                    Students
                    </button>
                </a>
                {this.state.isPresident &&
                <a href={`http://localhost:8080/club-list/club-list.html?sId=${this.state.sid}`}>
                    <button className="btn btn-danger float-right"
                            onClick={() => this.deleteClub(this.state.club.clubId)}>
                        Delete
                    </button>
                </a>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <ClubEditor />,
    document.getElementById('root')
)
