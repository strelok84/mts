import React from "react";
import Block from "./Block";
import Form from "./Form"
import GoogleMapReact from "google-map-react";
import sunset from "../img/DSC_2804.JPG"
const key = "AIzaSyDEUoFQqwctWUViRtQq47lU8YuYXvAiXkI";

class Main extends React.Component {
  state = {
    address: "",
    data: [{ data: { value: "afa" } }, {}, {}, {}, {}],
    lat:53.233,
    lng:50.256,
    zoom:8
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
    const details = document.querySelector("details");
    const map = document.getElementsByClassName("map")
    const ad1 = details.children[1];
    details.open = true;
    map[0].style.gridRow="3/4"
    details.style.gridRow="2/3"
  };
  chosenName = (data, event) => {
    const latlng=document.getElementsByClassName("latlng")
    if (data.data.house) {
      this.setState({
        lat:+data.data.geo_lat,
        lng:+data.data.geo_lon,
        zoom:17
      })
      latlng[0].style.display="inline"
      
    }
    const address = document.getElementById("input");
    address.value = event.target.innerHTML;
    const details = document.querySelector("details");
    details.open = false;

    const map = document.getElementsByClassName("map")
    map[0].style.gridRow="2/3"
    details.style.gridRow="3/4"
  };

  render() {
    return (
      <div className="main_wrapper">
        <div className="address">
          {/* <label htmlFor="address">
            Проверьте подключение Вашего дома к сети МТС
          </label> */}
          
          <input
            id="input"
            name="address"
            type="text"
            onChange={this.searchName}
            placeholder="Проверьте подключение Вашего дома к сети МТС"
          />
          <details className="details">
            <summary></summary>
            <ul multiple size="5" className="select">
              <li
                onClick={(event) => this.chosenName(this.state.data[0], event)}
                tabIndex={1}
              >
                {this.state.data[0]
                  ? this.state.data[0].value
                  : "Неизвестный адрес"}
              </li>
              <li
                onClick={(event) => this.chosenName(this.state.data[1], event)}
                tabIndex={2}
              >
                {this.state.data[1] ? this.state.data[1].value : ""}
              </li>
              <li
                onClick={(event) => this.chosenName(this.state.data[2], event)}
                tabIndex={3}
              >
                {this.state.data[2] ? this.state.data[2].value : ""}
              </li>
              <li
                onClick={(event) => this.chosenName(this.state.data[3], event)}
                tabIndex={4}
              >
                {this.state.data[3] ? this.state.data[3].value : ""}
              </li>
              <li
                onClick={(event) => this.chosenName(this.state.data[4], event)}
                tabIndex={5}
              >
                {this.state.data[4] ? this.state.data[4].value : ""}
              </li>
            </ul>
            
          </details>
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDEUoFQqwctWUViRtQq47lU8YuYXvAiXkI",
              }}
              center={{ lat: this.state.lat, lng: this.state.lng }}
              zoom={this.state.zoom}
            ></GoogleMapReact>
            <span className="latlng">{`Широта:${this.state.lat} Долгота:${this.state.lng}`}</span>
            
            </div>
        </div>
        <Block id="block_1" />
        <Form />
      </div>
    );
  }
}

export default Main;
