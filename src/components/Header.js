import React from 'react';
import nagiev from "../img/nagiev_short.png"
import logo from "../img/MTS_Logo_rus_r.png"

class Header extends React.Component {

  render(){
  return (
    <div className="header_wrapper">
      <div className="header_top">
        <div className="header_top-center">
          <div className="support">Служба поддержки</div>
          <div className="city">г.Самара</div>
        </div>
      </div>
      <div className="header_middle">
        <div className="header_middle_center">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="connection">Связь+интернет+ТВ</div>
          <div className="internetTV">Интернет+ТВ</div>
          <div className="internet">Интернет</div>
          <div className="digitalTV">Цифровое ТВ</div>
          <div className="connect">Подключение</div>

          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li>
                <a className="menu__item" href="#">
                Связь+интернет+ТВ
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                Интернет+ТВ
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                Цифровое ТВ
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                Подключение
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="header_bottom_center">
          <div className="subscription">
            Подписка на связь, сервисы экосистемы со скидкой
          </div>
          <h2 className="heading">Встречайте НЕТАРИФ</h2>
          <div className="link">Подробнее</div>
          <img src={nagiev} className="nagiev"></img>
          <div className="mts_line"></div>
        </div>
      </div>
    </div>
  )
  }
}

export default Header;
