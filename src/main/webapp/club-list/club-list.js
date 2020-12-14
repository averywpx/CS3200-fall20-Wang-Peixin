class ClubList extends React.Component {
    state = {
        clubs: [],
        sid: 0,
        isStudent: false,
        isPresident:false
    }

    findAllClubs = () =>
      findAllClubs()
        .then((clubs) => this.setState({clubs}))

    createClub = () =>
      createClub()
        .then(() => this.findAllClubs())

    deleteClub = (clubId) =>
      deleteClub(clubId)
        .then(() => this.findAllClubs())

    enrollStudent = (sid, cid, isPresident) =>
        enrollStudent(sid, cid, isPresident)
            .then(() => this.findAllClubs())

    // isPresident = (studentId, clubId) => {
    //     isPresident(studentId, clubId).then(b => this.setState({
    //         isPresident: b}))
    // }


    componentDidMount = () =>{
        let search = window.location.search
        if(search) {
            search = search.replace("?", "")
            search = search.split("=")
            const sId = search[1]
            this.setState({
                sid: sId,
                isStudent: true
            })
            console.log(this.state)

        }
        this.findAllClubs().then(clubs => console.log(this.state))
    }


    render() {
        return (
            <div className="container-fluid">
                <button
                  className="btn btn-success float-right"
                  onClick={() => this.createClub()}>
                  Create
                </button>
                <a className="btn btn-danger float-right"
                   href="../../index.html">
                  Home
                </a>
                <h1>Club List</h1>

                <table className="table">
                  <tbody>
                  {
                    this.state.clubs.map((club) =>
                      <tr key={club.clubId}>
                        <td>{club.clubId}</td>
                        <td>{club.name}</td>
                        <td>
                            {this.state.isStudent &&
                                <a className="btn btn-primary float-right"
                                href={`../../club-editor/club-editor.html?clubId=${club.clubId}=${this.state.sid}`}
                                onClick={() => this.enrollStudent(this.state.sid, club.clubId, 0)}>
                                Join
                            </a>}
                            {this.state.isStudent &&
                            <a className="btn btn-primary float-right"
                               href={`../../club-editor/club-editor.html?clubId=${club.clubId}=${this.state.sid}`}
                               onClick={() => this.enrollStudent(this.state.sid, club.clubId, 1)}>
                                Join as President
                            </a>}
                          <a className="btn btn-primary float-right"
                             href={`../../club-editor/club-editor.html?clubId=${club.clubId}=${this.state.sid}`}>
                            Edit
                          </a>
                            {/*{isPresident(this.state.sid, club.clubId) &&*/}
                            {/*    <button className="btn btn-danger float-right"*/}
                            {/*            onClick={() => this.deleteClub(club.clubId)}>*/}
                            {/*        Delete*/}
                            {/*    </button>*/}
                            {/*}*/}

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
    <ClubList/>,
    document.getElementById('root')
)

