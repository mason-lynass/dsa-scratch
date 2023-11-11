let mockString = '1 Choc Chip, 1 Plain Cheese, 2 Squash, 1 Thermal Bag, 2 Pepperoni, 3 Pancetta,1 Peperoni, 1 Squash,1 Birthday, 1 Chocolate chip, 1 Hot Sausage, 1 Pepperoni,1 Pepperoni, 1 Hot Sausage, 1 Pancetta, 1 Squash,1 Squash, 1 Plain Cheese, 1 Hot Sausage,1 Pancetta, 1 Squash, 1 Plain Cheese,2 Pancetta, 2 Squash,1 Hot Sausage, 2 Plain Cheese, 1 Pancetta,1 Chocolate Chip, 1 Mushroom,1 Mushroom,2 Mushroom,2 Pepperoni, 2 Mushroom,2 Squash, 2 Mushroom,1 Pancetta, 1 Mushroom,2 Mushroom, 2 Birthday Party,1 Squash, 1 Mushroom, 1 Plain Cheese,1 Pancetta, 1 Mushroom, 1 Pepperoni,2 Plain Cheese,2 Pepperoni, 2 Pancetta, 3 Pancetta,1 Chocolate Chip, 2 Hot Sausage, 2 Pepperoni,1 Vigna Del Cuc Prosecco, 1 Birthday Party, 2 Mushroom, 1 Pepperoni,1 Hot Sausage, 1 Mushroom, 1 Pepperoni,1 Pancetta, 1 Mushroom,1 Squash, 1 Pepperoni, 1 Hot Sausage,2 Hot Sausage, 2 Pepperoni, 2 Mushroom, 2 Pancetta,1 Chocolate Chip, 2 Mushroom, 1 Squash,1 Hot Sausage, 1 Mushroom, 2 Pepperoni,1 Chocolate Chip, 1 Plain Cheese, 1 Pancetta, 1 Mushroom,1 Pepperoni, 1 Mushroom, 1 Plain Cheese,1 Naked, 1 Plain Cheese, 1 Mushroom,1 Pepperoni, 1 Mushroom, 1 Pancetta,1 Hot Sausage, 1 Mushroom, 1 Pepperoni, 2 Squash,2 Mushroom,1 Chocolate Chip, 1 Pancetta, 1 Squash, 1 Mushroom,1 Pancetta, 1 Mushroom,2 Mushroom,1 Hot Sausage, 2 Plain Cheese, 1 Pancetta, 1 Squash,2 Mushroom,1 Pepperoni, 1 Pancetta, 1 Mushroom,1 Mushroom, 1 Pancetta, 1 Pepperoni, 1 Hot Sausage, 1 Squash, 1 Plain Cheese, 1 Hot Sausage, 1 Squash, 1 Mushroom'


mockString = '1 Hot Saus, 4 Pancetta,2 Squash, 2 Plain Che, 2 Peppersoni,1 Pepperoni, 1 Plain Che, 1 Pancetta, 1 Squash,1 Bizarre Television People, 1 Il Mostro Ragana, 3 Naked, 1 Mushroom,1 Squash, 1 Plain Cheese, 1 Mushroom,1 Birthday Party, 1 Plain Cheese, 1 Mushroom,1 Mushroom,1 Pancetta, 2 Mushroom,1 Mushroom, 1 Squash, 1 Pancetta,1 Pepperoni, 1 Squash, 1 Mushroom, 1 Pancetta, 2 Chocolate Chip,1 Pancetta, 2 Mushroom,1 Pancetta, 1 Mushroom,1 Pancetta, 1 Pepperoni, 1 Hot Sausage, 1 Mushroom,Chip, 1 Mushroom,1 Squash, 1 Mushroom,1 Birthday Party, 1 Mushroom, 1 Pancetta, 1 Pepperoni,1 Plain Cheese, 1 Squash,1 Il Mostro Ragana, 1 Squash, 1 Plain Cheese, 1 Mushroom,1 Mushroom, 1 Pepperoni,2 Plain Cheese, 2 Mushroom,1 Plain Cheese, 1 Pancetta, 1 Squash,1 Squash, 1 Mushroom, 1 Pepperoni,5 Naked,1 Chocolate Chip, 1 Pepperoni, 1 Plain Cheese, 1 Mushroom,1 Mushroom, 1 Plain Cheese, 1 Pepperoni, 1 Squash'
// let inputString = ''
let inputString = mockString

let inputArrayOfStrings = inputString.split(',')

const catchMap = { 

 } 

// for now, every item has to be separated by a ,
for (let i = 0; i < inputArrayOfStrings.length; i++) {
    let target = inputArrayOfStrings[i]
    if (target[0] === ' ') target = target.slice(1)
    let product = target.slice(2).toString()
    let count = parseInt(target.slice(0,1))
    console.log(product, count)

    let productPrefix = product.toLowerCase().slice(0,3)

    if (Object.keys(catchMap).length < 1) catchMap[product] = count

    else if (Object.keys(catchMap).filter((prod) => prod.toLowerCase().slice(0,3).includes(productPrefix)).length > 0) {
        console.log('filter one', product)
        let currentProduct = Object.keys(catchMap).filter((prod) => prod.toLowerCase().slice(0,3).includes(productPrefix))
        catchMap[currentProduct] = parseInt(catchMap[currentProduct]) + count
    }

    else if (Object.keys(catchMap).includes(product)) {
        console.log('adding to a product')
        catchMap[product] = parseInt(catchMap[product]) + count
    }
    else if (!Object.keys(catchMap).includes(product)) {
        console.log('adding a product')
        catchMap[product] = count
    }

    
}
console.log(catchMap)

