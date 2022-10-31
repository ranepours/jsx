const App = () => {
    return (
        <div>
            <Tweet
                name="Me" 
                user="mmmeee" 
                date={new Date().toDateString()} 
                message="I just had a sandwich"
            />
            <Tweet
                name="Myself" 
                user="mmmyyyssseeelllffff" 
                date={new Date().toDateString()} 
                message="orange juice > apple juice"
            />
            <Tweet
                name="And I" 
                user="lonesome" 
                date={new Date().toDateString()} 
                message="must buy more #eggs"
            />
        </div>
    );
}