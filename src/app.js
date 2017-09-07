
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
                <CodeEditor />
            </div>
        );
    }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);