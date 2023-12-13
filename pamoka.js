import duomenys from "./data2.js"

const patikra = localStorage.getItem("countries")

const salys = patikra === null ? [] : JSON.parse(patikra)

duomenys.forEach((el, index) => {
    if (!el.hasOwnProperty('capital')){
        const country = {
            id: index+1,
            name: el.name.common,
            capital: 'Data not found'
        } 
salys.push(country)
    } else {
        const country = {
            id: index+1,
            name: el.name.common,
            capital: el.capital[0]
        } 
salys.push(country)
    }
})
localStorage.setItem("countries", JSON.stringify(salys))
console.log(salys)
