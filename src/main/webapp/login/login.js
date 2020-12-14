class Login extends React.Component {

    state = {
        username: '',
        password: '',
        sid: null
    }

    login = () => {
        console.log(this.state)
        login(this.state.username, this.state.password)
            .then((student) => {
                // if (student){
                    this.setState({sid: student.studentId})

                // }
            }
            )


    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Login</h1>

                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="Someone"
                               title="Use this username to login"
                               onChange={(e) => this.setState({username: e.target.value})}
                               value={this.state.username}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword"
                           className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control wbdv-field wbdv-password"
                               id="inputPassword"
                               placeholder="********"
                               onChange={(e) => this.setState({password: e.target.value})}
                               value={this.state.password}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                            <button className="btn btn-success form-control"
                                    onClick={this.login}>
                                Confirm
                            </button>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a href={`../../student-editor/student-editor.html?studentId=${this.state.sid}`}>
                            <button className="btn btn-primary form-control"
                                    onClick={this.login}>
                                Login
                            </button>
                        </a>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a href="../../register/register.html">
                            <button className="btn btn-primary form-control">
                            Register
                            </button>
                        </a>
                    </div>
                </div>


            </div>
        )


    }

}

ReactDOM.render(
    <Login/>,
    document.getElementById("root")
)