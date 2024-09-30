// Import required modules
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); // MongoDB
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// sTRIPE
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Create Express app
const app = express();

// Use CORS middleware
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const userCollection = client.db("organic").collection("user");
    const productCollection = client.db("organic").collection("product");
    const blogCollection = client.db("organic").collection("blog");
    const cartCollection = client.db("organic").collection("cart");
    const paymentCollection = client.db("organic").collection("payment");

    // Find all product
    app.get("/product", async (req, res) => {
      const cursor = productCollection.find();
      const user = await cursor.toArray();
      res.send(user);
    });

    // Find all blog post
    app.get("/blog", async (req, res) => {
      const cursor = blogCollection.find();
      const user = await cursor.toArray();
      res.send(user);
    });

    // View Product
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const product = await productCollection.findOne(query);
      res.send(product);
    });

    // Get cart data
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = {
        email: email,
      };
      const cursor = cartCollection.find(query);
      const cartItem = await cursor.toArray();
      res.send(cartItem);
    });

    // Add user to database while registration in firebase
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Add to cart
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    // Stripe payment start
    app.post("/create-payment-intent", async (req, res) => {
      const price = req.body.price;
      const priceInCent = parseFloat(price) * 100;
      if (!price || priceInCent < 1) return;

      const { client_secret } = await stripe.paymentIntents.create({
        amount: priceInCent,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.send({
        clientSecret: client_secret,
      });
    });
    // Stripe payment end

    // Save payment data to database after stripe payment start
    app.post("/payment", async (req, res) => {
      const paymentData = req.body;
      const result = await paymentCollection.insertOne(paymentData);
      res.send(result);
    });
    // Save payment data to database after stripe payment end



    // Data store to database after payment
    // app.post("/payments", async (req, res) => {
    //   const payment = req.body;
    //   const paymentResult = await paymentCollection.insertOne(payment);
    //   // Delete all items from cart after payment
    //   // console.log("Payment Info: ", payment);
    //   const query = {
    //     _id: {
    //       $in: payment?.cartId?.map((id) => new ObjectId(id)),
    //     },
    //   };
    //   const deleteResult = await cartCollection.deleteMany(query);

    //   res.send(paymentResult, deleteResult);
    // });

    // app.post("/payments", async (req, res) => {
    //   try {
    //     const payment = req.body;

    //     // Store payment data in the database
    //     const paymentResult = await paymentCollection.insertOne(payment);

    //     // Prepare the query to delete items from the cart
    //     const query = {
    //       _id: {
    //         $in: payment?.cartId?.map((id) => new ObjectId(id)),
    //       },
    //     };

    //     // Delete items from the cart
    //     const deleteResult = await cartCollection.deleteMany(query);

    //     // Respond with the results
    //     res.send({ paymentResult, deleteResult });
    //   } catch (error) {
    //     console.error(
    //       "Error processing payment and deleting cart items:",
    //       error
    //     );
    //     res
    //       .status(500)
    //       .send({ error: "An error occurred while processing your request." });
    //   }
    // });

    // Delete single Cart items from cart page
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Define a test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
