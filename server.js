import express from 'express';

const app = express();
app.get('*', (req, res) => res.send('Hello home!'));

app.listen(3000, () => console.log('Live on :3000'));
