import React from "react";
import "./App.css";
import { json } from "./json-data";

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}

function App() {
  return (
    <div className="App">
      <h1>JSON view app</h1>
      <JsonViewer data={json}></JsonViewer>
    </div>
  );
}

class JsonViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenItems: new Set(),
      isAllTreeVisible: true
    };

    this.onChangeBranchVisibility = this.onChangeBranchVisibility.bind(this);
  }

  renderTree() {
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
      <JsonBranch
        name={key}
        value={valueData}
        isParent={isParent}
        onChangeBranchVisibility={this.onChangeBranchVisibility}
      ></JsonBranch>
    );
  }

  onChangeBranchVisibility(isVisible, branchName) {
    const { hiddenItems } = this.state;
    let newData;

    if (!isVisible) {
      newData = hiddenItems.add(branchName);
      this.setState({ hiddenItems: newData });
    } else {
      newData = new Set(hiddenItems);
      newData.delete(branchName);
      this.setState({ hiddenItems: newData });
    }
    this.onHiddenItemsChange(newData);
  }

  onHiddenItemsChange(hiddenItems) {
    const isHiddenItems = hiddenItems.size;
    this.setState({ isAllTreeVisible: !isHiddenItems });
  }

  renderToggleButton() {
    const { isAllTreeVisible } = this.state;

    return (
      <button onClick={this.onChangeTreeVisibility}>
        {isAllTreeVisible ? "Collapse" : "Expand"} all
      </button>
    );
  }

  onChangeTreeVisibility(state) {
    this.setState({ isAllTreeVisible: state });
  }

  render() {
    return (
      <div className="wrapper">
        {this.renderToggleButton()}
        {this.renderTree()}
      </div>
    );
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
    const newState = !this.state.isVisible;

    this.props.onChangeBranchVisibility(newState, this.props.name);
    this.setState({ isVisible: newState });
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
