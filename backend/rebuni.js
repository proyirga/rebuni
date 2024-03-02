const userRoute = require("./routes/users.route.js");
const roleRoute = require("./routes/roles.route.js");
const courseRoute = require('./routes/courses.route.js');
const classroomRoute = require('./routes/classrooms.route.js');
const lessonPlanRoute = require('./routes/lessonplans.route.js');
const announcementRoute = require('./routes/announcements.route.js');
const opportunityRoute = require('./routes/opportunities.route.js');

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const User = require("./models/users.model.js");
const Role = require("./models/roles.model.js");
const Course = require("./models/courses.model.js");
const Classroom = require('./models/classrooms.model.js');
const LessonPlan = require('./models/lessonplans.model.js');
const Announcement = require('./models/announcements.model.js');
const Opportunity = require('./models/opportunities.model.js');

//Middleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", userRoute);
app.use("/api/roles", roleRoute);
app.use("/api/courses", courseRoute);
app.use("/api/classrooms", classroomRoute);
app.use("/api/lessonplans", lessonPlanRoute);
app.use("/api/announcements", announcementRoute);
app.use("./api/opportunities", opportunityRoute);

mongoose
  .connect(
    "mongodb+srv://rebuni:2Cool4IT@cluster0.gl6qlg3.mongodb.net/rebuni?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed.");
  });
