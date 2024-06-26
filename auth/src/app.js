const errorHandler = require('../../shared/helpers/errorHandler');
const express = require('express');
 const app = express();
 const authRoutes = require('./api/routes/auth');
 const userRoute = require('./api/routes/user');
 app.use(express.json());

 app.use('/auth', authRoutes);
 app.use('/user', userRoute);
 app.use(errorHandler);

// // error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });
module.exports = app;