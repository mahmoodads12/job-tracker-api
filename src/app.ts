import express from 'express';
import router from './routes';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.get('/test-db', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.use('/', router);
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
