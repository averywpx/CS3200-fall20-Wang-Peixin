class StudentList extends React.Component {

    state = {
        students: [],
        cid: 0,
        inClub: false
    }

    findAllStudents = () =>
        findAllStudents()
            .then((students) => this.setState({students}))

    // componentDidMount = () =>
    //     this.findAllStudents().then(Students => console.log(Students))

    findStudentsForClub = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const clubId = search[1]
        findStudentsForClub(clubId)
            .then(students => this.setState({
                cid: clubId,
                students: students,
                inClub: true}))

    }




    createStudent = () => {
        console.log(this.state)
        createStudent(this.state.cid)
            .then(() => this.findAllStudents())
    }
    deleteStudent = (studentId) =>
        deleteStudent(studentId)
            .then(() => this.findAllStudents())

    unenrollStudent = (sid, cid) =>
        unenrollStudnet(sid, cid)
            .then(() => this.findStudentsForClub())

    componentDidMount = () => {
        let search = window.location.search
        if(search) {
            this.findStudentsForClub()

        } else {
            this.findAllStudents()
        }
    }

    render() {
        return (
            <div className="container-fluid">
                {
                    !this.state.inClub &&
                    <button
                        className="btn btn-success float-right"
                        onClick={() => this.createStudent()}>
                        Create
                        {console.log(this.state)}
                    </button>
                }


                <a className="btn btn-primary float-right"
                   href="../../index.html">
                    Home
                </a>
                <h1>Student List</h1>

                <table className="table">
                    <tbody>
                    {
                        this.state.students.map((student) =>
                            <tr key={student.studentId}>
                                <td>{student.studentId}</td>
                                <td>{student.username}</td>
                                <td>
                                    {  !this.state.inClub &&
                                    <a className="btn btn-primary float-right"
                                       href={`../../student-editor/student-editor.html?studentId=${student.studentId}`}>
                                        Edit
                                    </a>}
                                    {/*{  !this.state.inClub &&*/}
                                    {/*    <button className="btn btn-danger float-right"*/}
                                    {/*            onClick={() => this.deleteStudent(student.studentId)}>*/}
                                    {/*        Delete*/}
                                    {/*    </button>*/}
                                    {/*}*/}
                                    {  this.state.inClub &&
                                    <a className="btn btn-danger float-right"
                                       href={`../../student-list/student-list.html?clubId=${this.state.cid}`}
                                       onClick={() => this.unenrollStudent(student.studentId, this.state.cid)}>
                                        Leave the Club
                                    </a>}
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
    <StudentList/>,
    document.getElementById('root')
)