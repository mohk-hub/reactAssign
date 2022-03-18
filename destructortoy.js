const toyOne = {
    brand: 'car',
    type: 'motercar',
    year: 1988, 
    color: 'red',
    booking: {
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'INDIA'
    }
  }

  
  function myToy({ type, booking: { state } }) {
    const message = 'My ' + type + ' is booked in ' + state + '.';
  }

  myToy(toyOne)