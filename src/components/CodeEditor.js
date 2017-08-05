import AceEditor from 'react-ace';
import { render } from 'react-dom';
import brace from 'brace';
import React, { Component } from 'react';

import 'brace/mode/c_cpp';
// import 'brace/mode/assembly_arm';
import 'brace/theme/monokai';


export default class CodeEditor extends Component
{
    constructor()
    {
        super();

        

    }


    render()
    {
        return (
            <AceEditor
                mode="c_cpp"
                theme="monokai"
                enableLiveAutocompletion={true}
            />
        );
    }
}