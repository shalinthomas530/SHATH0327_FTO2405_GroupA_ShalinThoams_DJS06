// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
provinces.forEach(item => console.log(item));
// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']
names.forEach(item => console.log(item));


//ForEach Basics
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//Finding 'S'
const containsS = names.map(name =>
  name.split('').some(char => char.toLowerCase() === 's') //  some() checks if at least one element in the array satisfies the condition.
); // split('') spererates the name into individual characters 
console.log(containsS);

//Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

//Sorting alphabetically
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

//Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes('Cape')); // If province includes cape then it will not be included in the result
console.log(filteredProvinces);

// Creating Object Mapping
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];  // Set the name as the key and the matching province as the value
  return acc;  // Return the updated object
}, {});
console.log(nameProvinceMap);


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log(
  // Log each product name
  'Product Names:', products.map(item => item.product).join(', '), // creates a new array and seperates the items using commas
  
  // Filter by Name Length
  '\nFiltered Products ', products.filter(item => item.product.length <= 5),  // checks if the character length is  or less

  // Price Manipulation
  '\nTotal Price:', products.filter(item => item.price && !isNaN(item.price)) // filters out the products with invalid prices. NaN ensures that the price is a valid number by ensuing the price is not NaN and does include a number
                        .reduce((acc, item) => acc + Number(item.price), 0), //acc (accumulator) adds up the total as it runs throgh the list, Number() converts the number string into  number and that number gets added to the running total

  // Concatenate Product Names
  '\nConcatenated Product Names:', products.reduce((acc, item) => acc + item.product + ', ', '').slice(0, -2),  // slice () starts at index 0 and ends t -2 to remove the end ","

  // Find Extremes in Prices
  (() => {
    const validProducts = products.filter(item => item.price && !isNaN(item.price)); //ensures the product has a price
    const extremes = validProducts.reduce((acc, item) => {
      const price = Number(item.price);
      if (price > acc.highestPrice) {
        acc.highestPrice = price;
        acc.highestProduct = item.product;
      }
      if (price < acc.lowestPrice) {
        acc.lowestPrice = price;
        acc.lowestProduct = item.product;
      }
      return acc;
    }, { highestPrice: -Infinity, lowestPrice: Infinity, highestProduct: '', lowestProduct: '' });
    return `\nHighest: ${extremes.highestProduct} \nLowest: ${extremes.lowestProduct}`;
  })(),

  // Object Transformation
 '\nTransformed Products:', products.reduce((acc, item) => {
    const transformedProduct = Object.entries(item).reduce((productAcc, [key, value]) => {
      if (key === 'product') productAcc['name'] = value;  // Rename 'product' to 'name'
      if (key === 'price') productAcc['cost'] = value;    // Rename 'price' to 'cost'
      return productAcc;
    }, {});
    
    acc.push(transformedProduct);  
    return acc; // Object.entries() converts the object into an array of key value pairs
  }, []) 
);