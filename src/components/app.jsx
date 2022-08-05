import React from 'react';
import Filter from "./filter";
import TicketList from "./ticket-list";

function App() {
  return (
    <div className="main">
      <h1 className="visually-hidden">Tickets filter</h1>
      <Filter />
      <TicketList/>
    </div>
  );
}

export default App;
