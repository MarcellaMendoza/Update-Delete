const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//***** Add your routes here
app.post('update', (req, res) {


  async function updateDoc() {
    try {
      await client.connect()
      const collection = client.db('test_db').collection('users')
      await collection.updateOne({},
                                 {$set: {
                                   []
                                 }})
      
      res.sendStatus(200)
    }
    catch(err) {
      console.log(err)
      res.sendStatus(400)
    }
  }
  updateDoc()
})




app.listen(port)