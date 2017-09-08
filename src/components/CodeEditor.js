// import AceEditor from 'react-ace';
import { render } from 'react-dom';
import brace from 'brace';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'brace/mode/c_cpp';
import 'brace/ext/language_tools';

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
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/c_cpp");
        
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });

        
    }


    render()
    {
        return (
            <div id="editor" />
        );
    }
}