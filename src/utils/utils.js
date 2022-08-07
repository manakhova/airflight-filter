export const getCorrectEnding = (num) => {
    const n = num % 10;

    switch (n) {
        case 1:
            return 'пересадка';
        case 2:
           return 'пересадки';
        case 3: 
            return 'пересадки';
        default:
            return 'пересадок';    
    }
}

export const sortByPrice = (tickets) => {
    return tickets.sort((ticketA, ticketB) => ticketA.price - ticketB.price);
}

export const FilterType = {
  ALL: 'all',
  TR0: '0',
  TR1: '1',
  TR2: '2',
  TR3: '3'
}