// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';


import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
        </div>

         <AceEditor
            mode="java"
            theme="github"
            name="editorWindow"
            id="editorWindow"
            editorProps={{$blockScrolling: true}}
          /> 
      </div>
    );
  }
}
