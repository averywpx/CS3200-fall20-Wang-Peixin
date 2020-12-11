class SuggestionList extends React.Component {

    state = {
        suggestions: [],
        cid: 0
    }
    
    findAllSuggestions = () =>
        findAllSuggestions()
            .then((suggestions) => this.setState({suggestions}))

    // componentDidMount = () =>
    //     this.findAllSuggestions().then(suggestions => console.log(suggestions))

    findSuggestionsForClub = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const clubId = search[1]
        findSuggestionsForClub(clubId)
            .then(suggestions => this.setState({
                cid: clubId,
                suggestions}))
    }

    componentDidMount = () => {
        let search = window.location.search
        if(search) {
            this.findSuggestionsForClub()

        } else {
            this.findAllSuggestions()
        }
    }

    createSuggestion = () => {
        console.log(this.state)
        createSuggestion(this.state.cid)
            .then(() => this.findSuggestionsForClub())
    }
    deleteSuggestion = (suggestionId) =>
        deleteSuggestion(suggestionId)
            .then(() => this.findSuggestionsForClub())

    render() {
        return (
            <div className="container-fluid">
                <button
                    className="btn btn-success float-right"
                    onClick={() => this.createSuggestion()}>
                    Create
                </button>
                <a className="btn btn-danger float-right"
                   href="../../index.html">
                    Home
                </a>
                <h1>Suggestion List</h1>

                <table className="table">
                    <tbody>
                    {
                        this.state.suggestions.map((suggestion) =>
                            <tr key={suggestion.id}>
                                <td>{suggestion.id}</td>
                                <td>{suggestion.title}</td>
                                <td>
                                    <a className="btn btn-primary float-right"
                                       href={`../../suggestion-editor/suggestion-editor.html?suggestionId=${suggestion.id}=${this.state.cid}`}>
                                        Edit
                                    </a>
                                    <button className="btn btn-danger float-right"
                                            onClick={() => this.deleteSuggestion(suggestion.id)}>
                                        Delete
                                    </button>
                                
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
    <SuggestionList/>,
    document.getElementById('root')
)