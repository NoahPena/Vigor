import AceEditor from 'react-ace';
import { render } from 'react-dom';
import brace from 'brace';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'brace/mode/c_cpp';
import 'ace-builds/src-noconflict/ace';
// import 'brace/mode/assembly_arm';
import 'brace/theme/monokai';


export default class CodeEditor extends Component
{
    constructor()
    {
        super();

        

    }

    componentDidMount()
    {
        var editor = ReactDOM.findDOMNode(this);

        
    }


    render()
    {
        return (
            <AceEditor
                mode="c_cpp"
                theme="monokai"
                editorProps={{$enableBasicAutocompletion: true, $enableLiveAutocompletion: true, $blockScrolling: true}}
            />
        );
    }
}