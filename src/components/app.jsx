import React, {useState} from 'react';
import Filter from "./filter";
import TicketList from "./ticket-list";
import data from "../data/data.json";
import {adaptTicketToClient} from "../utils/adapter";
import {FilterType} from "../utils/utils";

let tickets = data.tickets.map((i) => adaptTicketToClient(i));

function App() {
  const [filters, setFilter] = useState([FilterType.ALL]);

  const handleFilterUpdate = (newFilter) => {
    if (filters.indexOf(newFilter) === -1) {
      setFilter(filters.concat(newFilter));
    } else {
      let filteredTickets = filters.filter((n) => {return n !== newFilter});
      setFilter(filteredTickets);
    }
  }

  const getFilteredTickets = (list, filters = FilterType.ALL) => {
    if (filters.indexOf(FilterType.ALL) !== -1) {
      return list;
    } else {
      return list.filter((i) => filters.indexOf(`${i.stops}`) !== -1);
    }
  }

  const filteredTickets = getFilteredTickets(tickets, filters);

  return (
    <div className="main">
      <h1 className="visually-hidden">Tickets filter</h1>
      <Filter filters={filters} updateFilters={handleFilterUpdate}/>
      {filteredTickets.length !== 0 ? 
      <TicketList tickets={filteredTickets}/> : 
      <div className="mail__list ticket-list">Билетов нет</div>}
    </div>
  );
}

export default App;
