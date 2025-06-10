const express = require('express');
const cors = require('cors');
const PORT = 8000;

const app = express();

const userData = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "username": "johndoe",
      "age": 28,
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "zipcode": "10001"
      }
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "username": "janesmith",
      "age": 34,
      "address": {
        "street": "456 Oak Ave",
        "city": "Los Angeles",
        "zipcode": "90001"
      }
    },
    {
      "id": 3,
      "name": "Ali Khan",
      "email": "alikhan@example.com",
      "username": "alikhan92",
      "age": 25,
      "address": {
        "street": "789 Clifton Rd",
        "city": "Lahore",
        "zipcode": "54000"
      }
    }
  ];
  
app.use(cors());
app.get('/',(req, res)=>{
    return res.send("Hellow kitty")
})
app.get('/api/getData',(req, res)=>{
    return res.status(200).json({info: userData})
})




app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})