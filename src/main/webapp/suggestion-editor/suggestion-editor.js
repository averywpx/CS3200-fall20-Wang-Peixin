class SuggestionEditor extends React.Component {
    state = {
        suggestion: {},
        clubId: 0,
        isPresident: false
    }

    findSuggestionById = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const suggestionId = search[1]
        const cid = search[2]
        const sid = search[3]
        this.isPresident(sid, cid)
        findSuggestionById(suggestionId)
            .then(suggestion => this.setState({
                clubId: cid,
                suggestion}))
    }
    componentDidMount = () => this.findSuggestionById()

    isPresident = (studentId, clubId) => {
        isPresident(studentId, clubId).then(b => {
            if (b) {
                this.setState({
                    isPresident: b
                })
            }}
        )
    }

    submitForm = () => {
        updateSuggestion(this.state.suggestion)
            .then(this.findSuggestionById)
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Suggestion Editor</h1>
                <form>
                    {/*<input*/}
                    {/*    readOnly={true}*/}
                    {/*    className="form-control"*/}
                    {/*    value={this.state.suggestion.id}/>*/}

                    {!this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input

                                onChange={
                                    (event) => {
                                        this.setState({
                                            suggestion: {
                                                ...this.state.suggestion,
                                                title: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.suggestion.title}/>
                        </div>
                    </div>
                    }
                    {this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input
                                readOnly={true}
                                onChange={
                                    (event) => {
                                        this.setState({
                                            suggestion: {
                                                ...this.state.suggestion,
                                                title: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.suggestion.title}/>
                        </div>
                    </div>
                    }

                    {!this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input

                                onChange={
                                    (event) => {
                                        this.setState({
                                            suggestion: {
                                                ...this.state.suggestion,
                                                description: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.suggestion.description}/>
                        </div>
                    </div>
                    }
                    {this.state.isPresident &&
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input
                                readOnly={true}
                                onChange={
                                    (event) => {
                                        this.setState({
                                            suggestion: {
                                                ...this.state.suggestion,
                                                description: event.target.value
                                            }
                                        })
                                    }}
                                className="form-control"
                                value={this.state.suggestion.description}/>
                        </div>
                    </div>
                    }


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
    <SuggestionEditor/>,
    document.getElementById("root")
)
