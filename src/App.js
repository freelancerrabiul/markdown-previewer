import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Card from './components/Card';
import Footer from './components/Footer';

const initialMd = `# Greetings free code camper's! 
 Welcome to my markdown previewer



This is one of Font-end Libraries Projects

## This is a sub-heading...
### And here's some other cool stuff:

this is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~

Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9

> example of blockquote

Inline \`code\`

\`\`\`
// code block

function sum (x, y) {
  return x + y;
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

My portfolio website(https://rabiul.netlify.app)
`;

class App extends Component {
  state = {
    markdownValue: initialMd
  };

  handleChange = e => {
    this.setState({
      markdownValue: e.target.value
    });
  };

  render() {
    const { markdownValue } = this.state;

    return (
      <div className="App">
        <h1 className="App-title"> &mdash;Markdown Previewer-Rabiul&mdash;</h1>
        <main className="App-content">
          <Card title="Editor">
            <Editor
              onChange={this.handleChange}
              markdownValue={markdownValue}
            />
          </Card>
          <Card title="Preview">
            <Preview markdownValue={markdownValue} />
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
