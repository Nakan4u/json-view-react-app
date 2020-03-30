import React from 'react';
import './App.css';

function isEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }

  return true;
}

var test_data = {
  "categorymembers": [
    {
      "pageid": 9845,
      "ns": 0,
      "title": "JavaScript"
    },
    {
      "pageid": 53741908,
      "ns": 0,
      "title": "Index of JavaScript-related articles"
    },
  ],
  "categorymembers2": [],
  "categorymembers3": {},
  "categorymembers4": null,
  "categorymembers5": undefined,
}

function App() {
  return (
    <div className="App">
      <h1>JSON view app</h1>
      <JsonViewer name="Hello world2!" data={test_data}></JsonViewer>
    </div>
  );
}

// TODO: render tree branched, if it is object or array;
// add method to render single li item;
class JsonViewer extends React.Component {
  createDataTree() {
    const { data } = this.props;

    if (!data) {
      return (<p>no data provided!</p>)
    };

    // return (<p>{JSON.stringify(data)}</p>)
    return this.renderListFromObject(data);
  }

  // TODO: render empty '{}' or '[]';
  renderItem(key, value) {
    let valueData;

    if (!value) {
      valueData = '';
    }
    if (Array.isArray(value)) {
      valueData = value.length ? this.renderListFromArray(value) : '[]';
    } else if (typeof value === 'object') {
      valueData = !isEmpty(value) ? this.renderListFromObject(value) : '{}';
    } else {
      valueData = `${value}`;
    }
    return (<li>{key} : {valueData}</li>)
  }

  renderListFromObject(obj) {
    const list = [];

    for (const key in obj) {
      const itemContent = this.renderItem(key, obj[key]);
      list.push(itemContent);
    }
    
    return (<ul>{list}</ul>);
  }

  renderListFromArray(arr) {
    const list = [];

    arr.forEach((value, index) => {
      const itemContent = this.renderItem(index, value);
      list.push(itemContent);
    });
    
    return (<ul>{list}</ul>);
  }

  render() {
    return(
      <div className="wrapper">
        <h2>{this.props.name}</h2>
        {this.createDataTree()}
      </div>
    )
  };
}

export default App;
