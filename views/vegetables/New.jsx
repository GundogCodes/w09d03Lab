const React = require('react')

function New(props){
    return(
        <div>
            <h1>Create a Vegetable</h1>
            <form action="/vegetables" method="POST" > {/*Tell the form where to submit itself and its method */}
            <h1>
                Name:<input type="text" name = "name"/><br/>
                Color:<input type="text" name = "color"/><br/>
                Is Ready to Eat:<input type="checkbox" name = "readyToEat"/><br/>
                <input type="submit" value = "create Vegetable"/>
            </h1>
            </form>
        </div>
    )
}

module.exports = New