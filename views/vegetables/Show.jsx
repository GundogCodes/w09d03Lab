const React = require('react')

function Show(props){
    return(
        <div>

        <h1>Singular Vegetable Page</h1>
        <h1>{props.vegetable.name}</h1>
        <p>
            The {props.vegetable.name} is {props.vegetable.color} and
            {props.vegetable.readyToEat? ' Its ready to Eat':' Its not ready to eat'}
        </p>
        </div>
    )
}

module.exports = Show