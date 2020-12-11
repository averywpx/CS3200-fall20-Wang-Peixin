class StudentEditor extends React.Component {
    state = {
        student: {},
        clubId: 0
    }

    findStudentById = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const studentId = search[1]
        const cid = search[2]
        findStudentById(studentId)
            .then(student => this.setState({
                clubId: cid,
                student: student}))
    }
    componentDidMount = () => this.findStudentById()

    submitForm = () => {
        updateStudent(this.state.student)
            .then(this.findStudentById)
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Student Editor</h1>
                <form>
                    <input
                        readOnly={true}
                        className="form-control"
                        value={this.state.student.studentId}/>
                    <input
                        onChange={
                            (event) => {
                                this.setState({
                                    student: {
                                        ...this.state.student,
                                        username: event.target.value
                                    }
                                })
                            }}
                        className="form-control"
                        value={this.state.student.username}/>
                    <a href={`../../student-list/student-list.html`}>
                        Back to List
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
    <StudentEditor/>,
    document.getElementById("root")
)
