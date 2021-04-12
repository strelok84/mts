import React from "react";

class Form extends React.Component {
  state = {
    address: "",
    data: [{ data: { value: "afa" } }, {}, {}, {}, {}],
    lat: 53.233,
    lng: 50.256,
    zoom: 8,
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
        this.setState({
          data: result.suggestions,
        });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
    <form className="form">
        <input></input>
    </form>
    )
  }
}

export default Form;
