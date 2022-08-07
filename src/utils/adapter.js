export const adaptTicketToClient = (ticket) => {
  const adaptedTicket = {
    ...ticket,
    originName: ticket.origin_name,
    destinationName: ticket.destination_name,
    departureDate: ticket.departure_date,
    departureTime: ticket.departure_time,
    arrivalDate: ticket.arrival_date,
    arrivalTime: ticket.arrival_time
  };

  return adaptedTicket;
};