class ClubEditor extends React.Component {
    state = {
        club: {}
    }

    componentDidMount = () => this.findClubById()

    findClubById = () => {
        let search = window.location.search.split("=")
        const clubId = search[1]
        findClubById(clubId)
            .then(club => this.setState({club}))
    }

    submitForm = () =>
        updateClub(this.state.club)
            .then(this.findClubById)

    render() {
        return(
            <div className="container-fluid">
                <h1>Club Editor {this.state.club.name}</h1>
                <form>
                    <input
                        value={this.state.club.clubId}
                        className="form-control"
                        readOnly={true}/>
                    <input
                        onChange={
                            (event) =>
                                this.setState({
                                    club: {...this.state.club, name: event.target.value}
                                })}
                        className="form-control"
                        value={this.state.club.name}/>
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
                <a href={`../../meeting-list/meeting-list.html?clubId=${this.state.club.clubId}`}>
                    Meetings
                </a>
                <a href={`../../suggestion-list/suggestion-list.html?clubId=${this.state.club.clubId}`}>
                    Suggestions
                </a>
                <a href={`../../student-list/student-list.html?clubId=${this.state.club.clubId}`}>
                    Students
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <ClubEditor />,
    document.getElementById('root')
)
