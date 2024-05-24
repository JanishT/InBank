import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';




const app = express();
const PORT =  5000;
// const MONGODB_URL = "mongodb://localhost:27017/Banking"


app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/Banking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Define the User schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  accountNo: { type: String, required: true },
  mobileNo: { type: String, required: true },
  password: { type: String, required: true },
  usertype: { type: String, required: true },
 
});

const User = mongoose.model('users', userSchema);

// Routes
app.post('/register', async (req, res) => {
  const { name, email, accountNo, mobileNo, password ,date} = req.body;
  console.log("data",req.body)
  try {
    const newUser = new User({ name, email, accountNo, mobileNo, password, date });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
});


app.post('/login', async (req, res) => {
    const { emailOrNumber, password } = req.body;
    try {
      // Find user by email or mobile number
      const user = await User.findOne({ 
        $or: [
          { email: emailOrNumber },
          { mobileNo: emailOrNumber }
        ]
      });
      
      // If user not found, return 400 Bad Request
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      
      // Compare passwords
      if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // If passwords match, return 200 OK with user data
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      // If any error occurs, return 500 Internal Server Error
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/transactions', async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
