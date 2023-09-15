import axios from 'axios';
import express, { Express } from 'express';

const PORT: number = parseInt(process.env.PORT || '8080');
const app: Express = express();

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.get('/rolldice', (req, res) => {
  res.send(getRandomNumber(1, 6).toString());
});

app.get('/user', async (req, res) => {
  const response = await axios.get('https://sit-api.freshket.co/baseApi/Users/UserAuth', {
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InFhLXB1bXAtc2l0MDFAZnJlc2hrZXQuY29fdCIsInVzZXJJZCI6MTcyNDU1LCJyZXN0YXVyYW50SWQiOjE3MjQ1NSwicm9sZSI6IkFkbWluIiwic3ViIjpmYWxzZSwibmJmIjoxODEzOTQzMjkyLjAsImlhdCI6MTY4NzcxMjg5Mi4wLCJleHAiOiIxODEzOTQzMjkyIiwia2lkIjoia1cwZnlibjlGb0czWjlIelpHTnZjOFBUZzREUmN6UG0iLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.foL-SXDv-AKM3ijcncM3AOO28l-BRg-tzLH_QNRYruM'
    }
  })

  res.send(response.data);
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
