const errorHandler = require('../../shared/helpers/errorHandler');
const express = require('express');
 const app = express();
 const candidateRoutes = require('./api/routes/candidate');
 const jobRoute = require('./api/routes/job');
 app.use(express.json());

 app.use('/job', jobRoute);
 app.use('/candidate', candidateRoutes);

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