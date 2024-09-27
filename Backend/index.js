// Import required modules
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb'); // MongoDB
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();



// Create Express app
const app = express();

// Use CORS middleware
app.use(cors());


// Connect to MongoDB
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
async function run() {
    try {

				// Connect the client to the server	(optional starting in v4.7)
        client.connect();

        const userCollection = client.db("organic").collection("user");
       
        // Add user to database while registration in firebase
        app.post("/users", async (req, res) => {
          const user = req.body;
          const result = await userCollection.insertOne(user);
          res.send(result);
      });


      app.get('/health', (req, res) => {
        res.json({ status: 'OK' });
    });
       
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



// Define a test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});


// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});