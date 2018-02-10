import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import '../assets/ace/arm_assembly';
import 'brace/theme/monokai';
import { lstat } from 'fs';

class Editor extends React.Component
{

    onChange(newValue) 
    {
        // console.log('change',newValue);
    }

    render()
    {
        return (
            <AceEditor
            mode="c_cpp"
            theme="monokai"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
            />
        );
    }
      
}

export default Editor;
