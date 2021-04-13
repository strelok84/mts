import React from "react";
import Tarrifs from "../base/tarrifs.json";
import web from "../img/iconWebGray.svg";
import tv from "../img/iconTVGray.svg";
import mob from "../img/iconMoBGray.svg";

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

  change = (id, name, e) => {
    const plus = document.getElementsByClassName("router_alert")[id - 1];
    const input = document.getElementById(`toggle${id}`);

    plus.innerHTML = "+10";
    if (input.checked === true && name === "Весь МТС Супер IP") {
      plus.innerHTML = "+10 руб/мес";
    } else if (input.checked === true && name === "Весь МТС Про") {
      plus.innerHTML = "+60 руб/мес";
    } else {
      plus.innerHTML = "";
    }
  };
  render() {
    return (
      <div className="cardbox">
        {this.state.data.map((item) => {
          return (
            <div className="card">
              <h4 className="cardname">{item.name}</h4>
              <div className="cardspeed">
                Скорость
                <br />
                <span id={item.id} className="speed">
                  {item.speed}
                </span>
                <br />
                Мбит/с
                <br />
              </div>
              <div className="cardcost">
                {item.cost} {"\u20BD"}/мес
              </div>
              <div className="card_connect_cost">
                Стоимость подключения:
              </div>
              <div className="card_connect_cost_alert">{item.connect_cost}</div>
              <div className="card_channels">
                {item.quantity_TV_channels} каналов
              </div>
              <div className="card_minutes">
                Безлимитный интернет {item.quantity_minutes} минут
                <br />
              </div>
              <div className="card_Gb"></div>
              <div className="card_SMS">Количество SMS</div>
              <div className="SMS_alert">{item.quantity_SMS}шт.</div>
              <div className="card_router">
                <p className="router_toggle">
                  <input
                    type="checkbox"
                    name={item.id}
                    id={"toggle" + item.id}
                    onChange={(e) => this.change(item.id, item.name, e)}
                  ></input>{" "}
                  Роутер
                </p>
              </div>
              <div className="router_alert"></div>
              <div className="card_console">{item.console}</div>
              <div className="min_img"></div>
              <div className="speed_img"></div>
              <div className="tv_img"></div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Block;
