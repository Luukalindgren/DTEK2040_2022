const mongoose = require('mongoose')
const generateId = () => {
    return Math.floor(Math.random() * 1000)
}
let pName = "";
let pNumber = "";
let counter = 0;

process.argv.forEach((val, index) => {
    if(index === 2) pName =  `${val}`
    if(index === 3) pNumber =  `${val}`
    counter++
})

//POISTA SALASANA TÄSTÄ ENNEN KUIN PALAUTAT!
const url = 'mongodb+srv://Luuka:0rZ5oCjCwdNGZESs@koulu.fuvk0.mongodb.net/fullstack-phonebook'

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String,
    id: Number
})

const person = new Person({
    name: pName,
    number: pNumber,
    id: generateId()
})


if(counter > 2) {   // Lisää ihmisen/numeron tietokantaan
    person
        .save()
        .then(res => {
            console.log(`adding person ${pName} number ${pNumber} to the directory`)
            mongoose.connection.close()
        })
} else {
Person              // Tulostaa kaikki ihmiset/numerot
    .find({})
    .then(result => {
        console.log("Puhelinluettelo:")
        result.forEach(person => {
        console.log(person.name + " " + person.number )
        })
        mongoose.connection.close()
    })
}