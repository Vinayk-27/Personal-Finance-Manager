const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = []; // Example user storage

app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = { email: req.body.email, password: hashedPassword };
  users.push(user);
  res.json({ message: "User registered!" });
});

app.post("/login", async (req, res) => {
  const user = users.find((u) => u.email === req.body.email);
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ email: user.email }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
});

app.listen(5000, () => console.log("Server running on port 5000"));
