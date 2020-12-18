class Register extends React.Component {

    state = {
        username: '',
        password: '',
        error: null
    }


    register = () => {
        console.log(this.state)
        register(this.state.username, this.state.password)
            .then(() => this.findAllStudents())
    }

    render (){
    return (
        <div className="container-fluid">
            <h1>Register</h1>

            {/*{*/}
            {/*    this.state.error &&*/}
            {/*    <div className="alert alert-danger">*/}
            {/*        {this.state.error}*/}
            {/*    </div>*/}
            {/*}*/}

            <div className="form-group row">
                <label htmlFor="username"
                       className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Someone"
                           title="Use this username to login"
                           onChange={
                               (event) => {
                                   this.setState({
                                       username: event.target.value
                                   })
                               }}
                           className="form-control"
                           value={this.state.username}
                    />
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
                           value={this.state.password}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">

                    <a className="btn btn-success"
                       href={`../../student-list/student-list.html`}
                       onClick={() => this.register()}>
                        Sign Up
                    </a>

                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col">
                    <a className="btn btn-primary float-left"
                       href={`../../index.html`}>
                        Login
                    </a>
                </div>

                <div className="col">
                    <a className="btn btn-danger float-right"
                       href={`../../index.html`}>
                        Cancel
                    </a>
                </div>
            </div>
        </div>
    )
}

}

ReactDOM.render(
    <Register/>,
    document.getElementById("root")
)
