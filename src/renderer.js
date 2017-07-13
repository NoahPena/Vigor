// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react';
import ReactDOM from 'react-dom';

//Ace Editor Stuff
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';

class App extends React.Component
{
  	render () 
  	{
    	return (

	    	<div id='parentDiv'>
		      	<h1>Minimalistic Electron React Boilerplate Code</h1>

		    	<AceEditor
			    mode="java"
			    theme="monokai"
			    name="UNIQUE_ID_OF_DIV"
			    editorProps={{$blockScrolling: true}}
			  	/>

		  	</div>
	    )
	}
}

ReactDOM.render(<App/>,document.getElementById('app'))
