class SearchClub extends React.Component {
    state = {
        clubs: [],
        sid: 0
    }

    findAllClubs = () =>
        findAllClubs()
            .then((clubs) => this.setState({clubs}))


}

ReactDOM.render(
    <SearchClub/>,
    document.getElementById('root')
)

// render (){
//     return (
//         <div className="container-fluid">
//             <ul>
//                 {
//                     this.state.meetings.map((meeting) =>
//                         <li>
//                             {meeting.title}
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }