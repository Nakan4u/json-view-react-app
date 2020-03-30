import React from "react";
import "./App.css";

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}

var test_data = {
  categorymembers: [
    {
      pageid: 9845,
      ns: 0,
      title: "JavaScript"
    },
    {
      pageid: 53741908,
      ns: 0,
      title: "Index of JavaScript-related articles"
    }
  ],
  categorymembers2: [],
  categorymembers3: {},
  categorymembers4: null,
  categorymembers5: {
    test: 'test',
    test2: 'test2'
  }
};

function App() {
  return (
    <div className="App">
      <h1>JSON view app</h1>
      <JsonViewer data={test_data}></JsonViewer>
    </div>
  );
}

class JsonViewer extends React.Component {
  createDataTree() {
    const { data } = this.props;

    if (!data) {
      return <p>no data provided!</p>;
    }

    return this.renderListFromObject(data);
  }

  renderListFromObject(obj) {
    const list = [];

    if (isEmpty(obj)) return "{}";

    for (const key in obj) {
      const itemContent = this.renderBranch(key, obj[key]);
      list.push(itemContent);
    }

    return <ul>{list}</ul>;
  }

  renderListFromArray(arr) {
    const list = [];

    if (!arr.length) return "[]";

    arr.forEach((value, index) => {
      const itemContent = this.renderBranch(index, value);
      list.push(itemContent);
    });

    return <ul>{list}</ul>;
  }

  renderBranch(key, value) {
    let valueData;
    let isParent = false;

    if (!value) {
      valueData = "";
    }
    if (Array.isArray(value)) {
      valueData = this.renderListFromArray(value);
      isParent = true;
    } else if (typeof value === "object") {
      valueData = this.renderListFromObject(value);
      isParent = true;
    } else {
      valueData = `${value}`;
    }

    return (
      <JsonBranch name={key} value={valueData} isParent={isParent}></JsonBranch>
    );
  }

  render() {
    return <div className="wrapper">{this.createDataTree()}</div>;
  }
}

class JsonBranch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };

    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  onChangeVisibility(event) {
    event.stopPropagation();
    if (!this.props.isParent) return;
    this.setState({isVisible: !this.state.isVisible});
  }

  renderVisibilityIndicator() {
    const { isParent } = this.props;
    const { isVisible } = this.state;

    return isParent ? <span>{isVisible ? "-" : "+"} </span> : null;
  }

  render() {
    const { name, value } = this.props;
    const { isVisible } = this.state;

    return (
      <li onClick={this.onChangeVisibility}>
        {this.renderVisibilityIndicator()} 
        {name}: {isVisible ? value : null}
      </li>
    );
  }
}

export default App;
