const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  const afterReService = {
      year: 2022,
      color: 'navy blue',
      type: 'sports car'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle, ...afterReService}
  
  console.log(myUpdatedVehicle);