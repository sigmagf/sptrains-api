import 'dotenv/config';

import { app } from './app';

app.listen(process.env.PORT || 3000, () => {
  console.clear();
  console.log('SPTrains Server');
  console.log(`Run on port: ${process.env.PORT || 3000}`);
});
