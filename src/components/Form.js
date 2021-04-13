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

  searchName = (event) => {
    this.setState((prevState) => ({
      address: event.target.value,
    }));
    this.componentDidMount();
    const details = document.getElementsByClassName("form_address")[0];
    const map = document.getElementsByClassName("map");
    const ad1 = details.children[1];
    details.open = true;
    /* map[0].style.gridRow="3/4"
    details.style.gridRow="2/3" */
  };

  chosenName = (data, event) => {
    //const latlng=document.getElementsByClassName("latlng")
    if (data.data.house) {
      this.setState({
        lat:+data.data.geo_lat,
        lng:+data.data.geo_lon,
        
      })
      alert(`Широта: ${this.state.lat} Долгота: ${this.state.lng}`)
      
    }
    const address = document.getElementById("client_address");
    address.value = event.target.innerHTML;
    const details = document.getElementsByClassName("form_address")[0];
    details.open = false;

    /* const map = document.getElementsByClassName("map")
    map[0].style.gridRow="2/3"
    details.style.gridRow="3/4" */
  };

  submit=(event)=>{
    event.preventDefault();
  }

  render() {
    return (
      <form className="form">
        <h4 className="form_head">Оставьте заявку на подключение</h4>
        <p className="flat">
          <input type="radio" name="place"></input> В квартиру
        </p>
        <p className="house">
          <input type="radio" name="place"></input> В офис/частный дом
        </p>
        <input type="text" placeholder="Фамилия" className="sername"></input>
        <input type="text" placeholder="Имя" className="client_name"></input>
        <input
          type="text"
          placeholder="Отчество"
          className="father_name"
        ></input>
        <input type="text" placeholder="Ваш телефон" className="phone"></input>
        <input
          type="text"
          placeholder="Ваш адрес"
          id="client_address"
          className="client_address"
          onChange={this.searchName}
        ></input>
        <details className="form_address">
          <summary></summary>
          <div onClick={(event) => this.chosenName(this.state.data[0], event)}>
            {this.state.data[0]
              ? this.state.data[0].value
              : "Неизвестный адрес"}
          </div>
        </details>
        <input type="submit" className="submit" onSubmit={this.submit}></input>
      </form>
    );
  }
}

export default Form;
