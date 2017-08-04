
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component
{

    constructor(props)
    {
        super();
    }


    render()
    {
        return (
            <div>
                <h1>It works!</h1>
            </div>
        );
    }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);