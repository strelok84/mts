import React from "react";
import Tarrifs from "../base/tarrifs.json";

class Block extends React.Component {
  state = {
    data: [{name:"1"},{name:"2"}],
  };
  componentDidMount() {
    let tarrifs = JSON.stringify(Tarrifs);
    this.setState({
      data: Tarrifs,
    });
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="cardbox">
        {this.state.data.map((item) => (
          <div
            className="card"
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Block;
