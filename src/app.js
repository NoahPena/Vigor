
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CodeEditor from './components/CodeEditor.js';

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
                <h1 id="test">It works!</h1>
                <CodeEditor id="editor" />
            </div>
        );
    }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);