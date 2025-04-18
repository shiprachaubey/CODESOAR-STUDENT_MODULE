import app from './src/app';
import { connectDB } from './src/config/db';

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
  });
})();
