class StudentEditor extends React.Component {
    state = {
        student: {},
        clubId: 0,
        clubs: []
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


    findClubsForStudent = () => {
        findClubsForStudent(this.state.student.studentId)
            .then(clubs => this.setState({
                clubs: clubs}))

    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Profile</h1>
                <div>
                    {/*<input*/}
                    {/*    readOnly={true}*/}
                    {/*    className="form-control"*/}
                    {/*    value={this.state.student.studentId}/>*/}


                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   readOnly
                                   className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   value={this.state.student.username}
                                // onChange={(e) => this.setState({
                                //     user: {
                                //         username: e.target.value
                                //     }
                                // })}
                            />
                        </div>
                    </div>



                    <div className="form-group row">
                        <label htmlFor="inputPassword"
                               className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="inputPassword"
                                   placeholder="******"
                                   value={this.state.student.password}
                                // onChange={(e) => this.setState({
                                //     user: {password: e.target.value}
                                // })}
                                   onChange={(e) => {
                                       const newPassword = e.target.value
                                       this.setState(prevState => ({
                                           student: {
                                               ...prevState.student,
                                               password: newPassword
                                           }
                                       }));
                                   }}
                            />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="phone"
                               className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control wbdv-field wbdv-phone"
                                   id="phone"
                                   placeholder="(xxx)-xxx-xxxx"
                                   value={this.state.student.phone}
                                // onChange={(e) => this.setState({
                                //     user: {
                                //         phone: e.target.value
                                //     }})}
                                   onChange={(e) => {
                                       const newPhone = e.target.value
                                       this.setState(prevState => ({
                                           student: {
                                               ...prevState.student,
                                               phone: newPhone
                                           }
                                       }));
                                   }}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email"
                               className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control wbdv-field wbdv-email"
                                   id="email"
                                   placeholder="example@gmail.com"
                                   value={this.state.student.email}
                                // onChange={(e) => this.setState({
                                //     user: {
                                //         email: e.target.value
                                //     }})}
                                   onChange={(e) => {
                                       const newEmail = e.target.value
                                       this.setState(prevState => ({
                                           student: {
                                               ...prevState.student,
                                               email: newEmail
                                           }
                                       }));
                                   }}
                            />
                        </div>
                    </div>

                    {/*<input*/}
                    {/*    onChange={*/}
                    {/*        (event) => {*/}
                    {/*            this.setState({*/}
                    {/*                student: {*/}
                    {/*                    ...this.state.student,*/}
                    {/*                    username: event.target.value*/}
                    {/*                }*/}
                    {/*            })*/}
                    {/*        }}*/}
                    {/*    className="form-control"*/}
                    {/*    value={this.state.student.username}/>*/}

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
                    <a href={`../../club-list/club-list.html?sId=${this.state.student.studentId}`}>
                        Search Club
                    </a>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <StudentEditor/>,
    document.getElementById("root")
)
