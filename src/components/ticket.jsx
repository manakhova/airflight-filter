import React from 'react';
import {getCorrectEnding} from "../utils/utils";

function Ticket(props) {
    const {ticket} = props;

    return (
        <li className="ticket-list__item ticket" data-stops = {ticket.stops}>
            <div className="ticket__buy">
                <span>{ticket.carrier}</span>
                <button type="button">Купить <br/> за {ticket.price} &#8381;</button>
            </div>
            <div className="ticket__info">
                <div className="ticket__timetable">
                    <time className="ticket__time" dateTime="">{ticket.departureTime}</time>
                    <div className="ticket__trans">{ticket.stops} {getCorrectEnding(ticket.stops)}</div>
                    <time className="ticket__time" dateTime="">{ticket.arrivalTime}</time>
                </div>
                <div className="ticket__from-to">
                    <div className="ticket__from">
                        <span className="ticket__from-airport">{ticket.origin}, {ticket.originName}</span>
                        <time className="ticket__from-date" dateTime="">{ticket.departureDate}</time>
                    </div>
                    <div className="ticket__to">
                        <span className="ticket__to-airport">{ticket.destination}, {ticket.destinationName}</span>
                        <time className="ticket__to-date" dateTime="">{ticket.arrivalDate}</time>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Ticket;