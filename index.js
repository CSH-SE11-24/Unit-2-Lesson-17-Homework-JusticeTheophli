const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let resturant = {
 name: "Capital One",
cuisine: "American style",
  rating: 7.5
}

// Console log the restaurant's name using the object

console.log(resturant.name)

// Add a new key called location and add the restaurant's location

resturant.location = "Kingsbridge"

// Change the rating of the restaurant to increase it by one

resturant.rating +=1

// Add a new key called test and set the value to null

resturant.rating = null

// Delete the test key

delete resturant.test

// Console log the object to see if the test key is gone

console.log(resturant)


// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

const resturant2 ={
  name: "Ugly baby",
  cuisine: "Thai",
rating: 10
}



