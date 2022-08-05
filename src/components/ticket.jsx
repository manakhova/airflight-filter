import React from 'react';
import logo from "../img/logo.png" ;

function Ticket() {
    return (
        <li className="ticket-list__item ticket">
            <div className="ticket__buy">
                <img src={logo} alt="Turkish Airlines" width="125px" height="35px"/>
                <button type="button">Купить <br/> за 100 &#8381;</button>
            </div>
            <div className="ticket__info">
                <div className="ticket__timetable">
                    <time className="ticket__time" dateTime="">10:20</time>
                    <div className="ticket__trans">2 пересадки</div>
                    <time className="ticket__time" dateTime="">10:20</time>
                </div>
                <div className="ticket__from-to">
                    <div className="ticket__from">
                        <span className="ticket__from-airport">dfdf</span>
                        <time className="ticket__from-date" dateTime="">10:20</time>
                    </div>
                    <div className="ticket__to">
                        <span className="ticket__to-airport">dfsdfsdf</span>
                        <time className="ticket__to-date" dateTime="">10:20</time>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Ticket;