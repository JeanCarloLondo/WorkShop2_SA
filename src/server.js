const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { PORT } = require('./config');
const refereeRoutes = require('./routes/referee.routes');
const setupSwagger = require('./utils/swagger');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// routes
app.use('/referees', refereeRoutes);

// healthcheck
app.get('/health', (_, res) => res.json({ status: 'ok' }));

// swagger
setupSwagger(app);

app.listen(PORT, () => console.log(`Express API running on port ${PORT}`));