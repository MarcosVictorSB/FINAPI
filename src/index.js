const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express()
app.use(express.json())

const customers = []

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - []
 */

app.post("/account", (request, response) => {
    const { cpf, name } = request.body

    const customerAlreadyExists = customers.some((customers) => customers.cpf === cpf)

    if(customerAlreadyExists){
        return response.status(400).json({err: "customer already exists"})
    }
    
    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    })

    return response.status(200).send()

})


const port = 3000
app.listen(port, console.log('rodando'))