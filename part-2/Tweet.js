const Tweet = ({ date, msg, name, user }) => {
    return (
        <div className="tweet">
            <span>{ name }</span>
            <span className="user">{ user }</span>
            <span className="date">{ date }</span>
            <p>{ msg }</p>
        </div>
    )
}