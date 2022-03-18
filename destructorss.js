const data = {
    location: [
        {
            latitude: '43.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
};

const obj = {
    location: [
        {
            latitude: mylatitude,
            longitude: mylongitude,
            city: mycity
        }
    ]
} = data;

console.log(mycity);
console.log(mylatitude);
console.log(mylongitude);