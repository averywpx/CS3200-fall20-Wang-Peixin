class MeetingList extends React.Component {
    state = {
        meetings: []
    }

    findAllMeetings = () =>
        findAllMeetings()
            .then((meetings) => this.setState({meetings}))

    componentDidMount = () =>
        this.findAllMeetings().then(meetings => console.log(meetings))

    render (){
        return (
            <div className="container-fluid">
                <ul>
                    {
                        this.state.meetings.map((meeting) =>
                            <li>
                                {meeting.title}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
    

}

ReactDOM.render(
    <MeetingList />,
    document.getElementById('root')
)

