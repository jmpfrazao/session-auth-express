import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Running');
});

app.listen(port, (err: any) => {
  if (err) {
    // tslint:disable-next-line:no-console
    return console.error(err);
  }
  // tslint:disable-next-line:no-console
  return console.log(`server is listening on ${port}`);
});
