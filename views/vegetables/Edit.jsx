const  React = require('react')


function Edit(props){
    const {name, _id, readyToEat,color} = props.vegetable //destructuring to create variables for name,id,readyToEat,color
    return(
        <div>
            <h1>{name} Edit Page</h1>
            <a href="/{vegetables}">Go back to Index</a>
            <form action={`/vegetables/${_id}?_method=PUT`} method="POST"> {/*tell the form where to submit itself and method*/}
                Name:<input type = "text" name ="name" defaultValue={name}/> <br/> {/* everything in jsx needs to self close*/}
                Color:<input type = "text" name ="color" defaultValue={color}/> <br/>
                Is Ready To Eat: {readyToEat?<input type = "checkbox" name ="readyToEat" defaultChecked/>:<input 
                type='checkbox' name='readyToEat'/>} <br/>
                <input type="submit" value = "Update Vegetable"/>
                
            </form>
        </div>
    )
}

module.exports = Edit