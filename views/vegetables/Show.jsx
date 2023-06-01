const React = require('react')

function Show(props){
    return(
        <div>


        <h1>{props.vegetable.name}</h1>
        <p>
            The {props.vegetable.name} is {props.vegetable.color} and
            {props.vegetable.readyToEat? ' Its ready to Eat':' Its not ready to eat'}
        </p>
        <a href={`${props.vegetable.id}/edit`}>Edit this Vegetable</a>
        <form action={`/vegetables/${props.vegetable.id}?_method=DELETE`} method="POST">
        <button>Delete Vegetable</button>
        </form>
        </div>
    )
}

module.exports = Show