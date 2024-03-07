require('dotenv').config();
const userRoute = require("./routes/users.route.js");
const roleRoute = require("./routes/roles.route.js");
const courseRoute = require('./routes/courses.route.js');
const classroomRoute = require('./routes/classrooms.route.js');
const lessonPlanRoute = require('./routes/lessonplans.route.js');
const announcementRoute = require('./routes/announcements.route.js');
const opportunityRoute = require('./routes/opportunities.route.js');

const express = require("express");
const port = process.env.PORT || 3001
const mongoose = require("mongoose");

const app = express();

const {logger} = require('./middleware/logger.js');
const errorHandler = require('./middleware/errorHandler.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions.js');
const connectDB = require('./config/db.js')
const {logEvents} = require('./middleware/logger.js');

const User = require("./models/users.model.js");
const Role = require("./models/roles.model.js");
const Course = require("./models/courses.model.js");
const Classroom = require('./models/classrooms.model.js');
const LessonPlan = require('./models/lessonplans.model.js');
const Announcement = require('./models/announcements.model.js');
const Opportunity = require('./models/opportunities.model.js');
const { authUser } = require("./controllers/users.controller.js");

connectDB();

//Middleware configurations
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

//Routes
app.use("/api/users", userRoute);
app.use("/api/roles", roleRoute);
app.use("/api/courses", courseRoute);
app.use("/api/classrooms", classroomRoute);
app.use("/api/lessonplans", lessonPlanRoute);
app.use("/api/announcements", announcementRoute);
app.use("./api/opportunities", opportunityRoute);
app.use("./api/users/auth", authUser);

//app.use(errorHandler);

mongoose.connection.once('open', () => {
  app.listen(port, () => console.log(`Server running on port ${port}`))
});

mongoose.connection.on('error', err => {
  console.log(err);
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrorLog.log')
});
  /*.connect(
    "mongodb+srv://rebuni:2Cool4IT@cluster0.gl6qlg3.mongodb.net/rebuni?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error)
    console.log("Connection Failed.");
  });*/
  
