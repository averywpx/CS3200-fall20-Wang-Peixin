class SuggestionEditor extends React.Component {
    state = {
        suggestion: {},
        clubId: 0
    }

    findSuggestionById = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const suggestionId = search[1]
        const cid = search[2]
        findSuggestionById(suggestionId)
            .then(suggestion => this.setState({
                clubId: cid,
                suggestion}))
    }
    componentDidMount = () => this.findSuggestionById()

    submitForm = () => {
        updateSuggestion(this.state.suggestion)
            .then(this.findSuggestionById)
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Suggestion Editor</h1>
                <form>
                    <input
                        readOnly={true}
                        className="form-control"
                        value={this.state.suggestion.id}/>
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