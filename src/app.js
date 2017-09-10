
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import brace from 'brace';

import CodeEditor from './components/CodeEditor.js';

class Main extends Component
{

    constructor(props)
    {
        super();
    }


    newTabButton()
    {
        
    }


    render()
    {
        return (
            <div>
                <button onClick={this.newTabButton}>New Tab</button>
                <CodeEditor />
            </div>
        );
    }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);