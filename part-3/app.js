const App = () => {
    return(
        <div>
            <Person 
                name="Sasha"
                age= {15}
                hobbies = { ["making music", "shopping", "hanging with friends"] }
            />
            <Person 
                name="Cloe"
                age= {16}
                hobbies = { ["soccer", "skateboarding", "crying"] }
            />
            <Person 
                name="Jade"
                age= {16}
                hobbies = { ["fashion design", "trying new foods", "science expirements"] }
            />
        </div>
    )
}