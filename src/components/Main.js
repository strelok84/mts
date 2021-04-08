import React from "react";

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
    const details = document.querySelector('details')
    details.open=true;
  };
  chosenName=(event)=>{
      const address =document.getElementById("address")
      address.value=event.target.innerHTML
      const details = document.querySelector('details')
      details.open=false;
      
  }

  render() {
    return (
      <div className="main_wrapper">
        <div className="address">
          <input
            id="address"
            name="address"
            type="text"
            onChange={this.searchName}
          />
          <details className="details">
            <summary></summary>
            <div onClick={this.chosenName}>{this.state.data[0] ? this.state.data[0].value : "Неизвестный адрес"}</div>
            <div onClick={this.chosenName}>{this.state.data[1] ? this.state.data[1].value : "Неизвестный адрес"}</div>
            <div onClick={this.chosenName}>{this.state.data[2] ? this.state.data[2].value : "Неизвестный адрес"}</div>
            <div onClick={this.chosenName}>{this.state.data[3] ? this.state.data[3].value : "Неизвестный адрес"}</div>
            <div onClick={this.chosenName}>{this.state.data[4] ? this.state.data[4].value : "Неизвестный адрес"}</div>
          </details>
        </div>
      </div>
    );
  }
}

export default Main;
