
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const router = require('./routes/index');
const cookiesParser = require('cookie-parser');
const { app, server } = require('./socket/index');

app.use(cors({
  origin: function (origin, callback) {
    callback(null, true); // Allow any origin
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookiesParser());

const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
  response.json({
    data: 'You have successfully connected',
  });
});

app.use('/api', router);

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('DB connection error:', error);
  });

   

















































// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const connectDB = require('./config/connectDB')
// const router = require('./routes/index')
// const cookiesParser = require('cookie-parser')
// const {app,server} = require('./socket/index')

// // const app = express();
// // app.use(cors({
// //     orgin : "*",
// //     credentials : true
// // }))

// app.use(cors({
//     origin: function (origin, callback) {
//         callback(null, true); // Allow any origin
//     },
//     credentials: true
// }));

// app.use(express.json())
// app.use(cookiesParser())

// const PORT = process.env.PORT || 8080

// app.get('/',(request,response)=>{
//     response.json({
//         message : "Server running at " + PORT
//     })
// })

// //api endpoints 
// app.use('/api',router)

// connectDB()
// server.listen(PORT,()=>{
//     console.log("server running at " + PORT)
// })
