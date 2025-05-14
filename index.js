const express = require('express');
const app = express();
const { sequelize } = require('./models/user');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

sequelize.sync({ force: false })  // creates tables if not exist
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => console.log('Server is running at http://localhost:3000'));
  })
  .catch(err => console.error('DB sync error:', err));
