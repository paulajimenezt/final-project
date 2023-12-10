const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const db = require("./src/db/index");
const horsesRouter = require("./src/routers/horses-router");
const userRouter = require("./src/routers/user-router");
const authRouter = require("./src/routers/auth-router");
const errorHandler = require("./src/middlewares/error-handling");

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/horses", horsesRouter);
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.use(errorHandler);

db.sequelize.sync().then(() => {
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
});
