const Person = ({ age, hobbies, name }) => {
    const vote = age >= 18 ? "go vote!" : "go study!";
}

const hobbyList = hobbies.map(hobby => <li>{ hobby }</li>);

return (
    <div>
        <p>Learn some info about this person:</p>
        <ul>
            <li>Name: {name.slice(0,6)}</li>
            <li>Age: { age }</li>
            <ul> Hobbies: 
                    { hobbyList }
            </ul>
        </ul>
        <h3> { vote }</h3>
    </div>
);