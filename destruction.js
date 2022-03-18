const bikeShop = {
    brand: 'suzuki',
    type: 'bike',
    year: 2015,
    color: 'red',
    booking: {
        city: 'Jaipur',
        state: 'Rajasthan',
        country: 'INDIA'
    },
    shippingFrom: {
        fromCity: 'Faridabad',
        fromstate: 'Rajasthan',
        fromCountry: 'DELHI'
    }
}

function saleShop({
    brand,
    booking: {
        state,
        city
    },
    shippingFrom: {
        fromCity,
        fromCountry
    }
}) {
    const shop = 'I' + ' booked my bike from ' + fromCity + ' and bring here in ' + city + ' ' +  state + ' and name ' + brand;
    console.log(shop);
}

saleShop(bikeShop)