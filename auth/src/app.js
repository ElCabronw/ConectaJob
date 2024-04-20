const express = require('express');
 const app = express();
 const authRoutes = require('./api/routes/auth');
 const errorHandler = require("./helpers/errorHandler");
 const userRoute = require('./api/routes/user');
 app.use(express.json());

// Conexão com o MongoDB
/*mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
*/
 app.use('/auth', authRoutes);
 app.use('/user', userRoute);

 app.use(errorHandler);

// error handler
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
// routes
/*app.use((req, res, next) => {
    res.status(200).json({
        message: 'Hello world!!!'
    });
});
*/
module.exports = app;