import React from "react";
import Tarrifs from "../base/tarrifs.json";

class Block extends React.Component {
  state = {
    data: [{ name: "1" }, { name: "2" }],
  };
  componentDidMount() {
    let tarrifs = JSON.stringify(Tarrifs);
    this.setState({
      data: Tarrifs,
    });
    
  }
  render() {
    
    return (
      <div className="cardbox">
        {this.state.data.map((item) => {
          
          return (
          <div className="card">
            <h4 className="cardname">{item.name}</h4>
            <div className="cardspeed">Скорость<br /><span id={item.id} className="speed">{item.speed}</span><br/>Мбит/с</div>
            <div className="cardcost">{item.cost} {'\u20BD'}/мес</div>
            <div className="card_connect_cost">Стоимость подключения - {item.connect_cost}!</div>
            <div className="card_channels">{item.quantity_TV_channels} каналов</div>
            <div className="card_minutes">Безлимитный интернет {item.quantity_minutes}</div>
            <div className="card_Gb">{item.quantity_Gb}</div>
            <div className="card_SMS">{item.quantity_SMS}</div>
            <div className="card_router">{item.router}</div>
            <div className="card_console">{item.console}</div>
          </div>
        )})}
      </div>
    );
  }
}

export default Block;
