import React from 'react';
import Ticket from "./ticket";
import {sortByPrice} from "../utils/utils";

function TicketList(props) {
    const {tickets} = props;

    return (
        <ul className="mail__list ticket-list">
            {sortByPrice(tickets).map((ticket, i) => (
                <Ticket key={i} ticket={ticket}/>
            ))}
        </ul>); 
}

export default TicketList;