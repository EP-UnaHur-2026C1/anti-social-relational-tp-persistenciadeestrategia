const express = require("express");
const app = express();
const db = require("./models");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const routerUsers = require("./routes/userRoutes");
const routerFollowers = require("./routes/followerRoutes");
const routerComments = require("./routes/commentRoutes"); 
const postRoutes = require('./routes/postsRoutes')

app.use(express.json());

app.use(postRoutes)
app.use("/user", routerUsers);
app.use("/follower", routerFollowers);
app.use("/comment", routerComments);


app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log(`Unahur - Anti-Social Net en http://localhost:${PORT}`);
});
