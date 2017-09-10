// import AceEditor from 'react-ace';
import { render } from 'react-dom';
import brace from 'brace';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import 'antd/lib/tabs/style/css'

import { Tabs } from 'antd/lib/tabs';
const TabPane = Tabs.TabPane;

import 'brace/ext/language_tools';

import 'brace/mode/c_cpp';
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
        editor.getSession().setMode("ace/mode/c_cpp");
        editor.setTheme("ace/theme/monokai");
        
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        });

        
    }


    render()
    {
        const tabPane = {

            
        }

        const tabStyle = {

            
        }

        return (
            <div>
                <Tabs>
                    <TabPane tab="Tab 1" key="1">Hello</TabPane>
                    <TabPane tab="Tab 2" key="2">World</TabPane>
                </Tabs>
                <div id="editor" />
            </div>
        );
    }
}
