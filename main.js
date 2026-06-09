const express = require("express");
const app = express();
const db = require("./models");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const routerUsers = require("./routes/userRoutes");
const routerFollowers = require("./routes/followerRoutes");
const routerComments = require("./routes/commentRoutes"); 
const routerTag = require("./routes/tagRoutes");
const routerPost = require("./routes/postsRoutes");

app.use(express.json());

app.use("/user", routerUsers);
app.use("/follower", routerFollowers);
app.use("/comment", routerComments);
app.use("/post", routerPost);
app.use("/tag", routerTag);


app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log(`Unahur - Anti-Social Net en http://localhost:${PORT}`);
});
