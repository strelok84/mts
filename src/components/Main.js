import React from "react";
import Block from "./Block";

class Main extends React.Component {
  state = {
    address: "",
    data: [{ data: { value: "afa" } }, {}, {}, {}, {}],
  };

  async componentDidMount() {
    const url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "0fd3ffd4af9f7a3fa7d084e0efb355d88dff4f89";
    const query = this.state.address;

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    };

    await fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        this.state.data = result.suggestions;
      })
      .catch((error) => console.log("error", error));
  }

  searchName = (event) => {
    this.setState((prevState) => ({
      address: event.target.value,
    }));
    this.componentDidMount();
    const details = document.querySelector("details");
    const ad1 = details.children[1];
    details.open = true;
   
  };
  chosenName = (event) => {
    const address = document.getElementById("input");
    address.value = event.target.innerHTML;
    const details = document.querySelector("details");
    details.open = false;
    
  };

  render() {
    return (
      <div className="main_wrapper">
        <div className="address">
          <label htmlFor="address">Проверьте подключение Вашего дома к сети МТС</label>
          <input
            id="input"
            name="address"
            type="text"
            onChange={this.searchName}
          />
          <details className="details">
            <summary></summary>
            <ul multiple size="5" className="select" >
            <li onClick={this.chosenName} tabIndex={1}>
              {this.state.data[0]
                ? this.state.data[0].value
                : "Неизвестный адрес"}
            </li>
            <li onClick={this.chosenName} tabIndex={2}>
              {this.state.data[1]
                ? this.state.data[1].value
                : ""}
            </li>
            <li onClick={this.chosenName} tabIndex={3}>
              {this.state.data[2]
                ? this.state.data[2].value
                : ""}
            </li>
            <li onClick={this.chosenName} tabIndex={4}>
              {this.state.data[3]
                ? this.state.data[3].value
                : ""}
            </li>
            <li onClick={this.chosenName} tabIndex={5}>
              {this.state.data[4]
                ? this.state.data[4].value
                : ""}
            </li>
            </ul>
          </details>
        </div>
        <Block id="block_1"/>
      </div>
    );
  }
}

export default Main;
