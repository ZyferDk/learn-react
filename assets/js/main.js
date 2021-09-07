`use strict`

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: `aji`,
    lastName: 'dk'
}


function getGreeting(user) {
    if (user) {
        return (
            <div>
                <h1 className="greeting">Hello, {formatName(user)}</h1>
            </div>
        );
    }
    return <h1>Hello, Stranger.</h1>;
}


const element = (
    <div tabIndex="0">{getGreeting(user)}</div>
)

ReactDOM.render(
    element,
    document.getElementById('root')
);