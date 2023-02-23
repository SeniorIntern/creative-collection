const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createPool({
  user: 'root',
  host: 'localhost',
  password: 'bobisfat',
  database: 'creative_business',
});

app.get('/home/news', (req, res) => {
  const sqlGet =
    'SELECT id, title, firstDesc, firstImageUrl FROM creative_business.news ORDER BY id DESC LIMIT 0,3';
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get('/home/events', (req, res) => {
  const sqlGet =
    'SELECT id, title, ImgOne FROM creative_business.events ORDER BY id DESC LIMIT 0,4';
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

// list event based on recently added
app.get('/news/get', (req, res) => {
  const sqlGet =
    'SELECT id, title, firstImageUrl FROM creative_business.news ORDER BY id DESC;';
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get('/news/get/:id', (req, res) => {
  const { id } = req.params;
  const sqlGet = 'SELECT * FROM creative_business.news WHERE id=?';
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.post('/news/post', (req, res) => {
  const {
    title,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    FourthImageUrl,
    firstDesc,
    secondDesc,
    thirdDesc,
  } = req.body;

  const sqlInsert =
    'Insert Into creative_business.news (title,firstImageUrl,secondImageUrl,thirdImageUrl,FourthImageUrl,firstDesc,secondDesc,thirdDesc) values(?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(
    sqlInsert,
    [
      title,
      firstImageUrl,
      secondImageUrl,
      thirdImageUrl,
      FourthImageUrl,
      firstDesc,
      secondDesc,
      thirdDesc,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

app.delete('/news/remove/:id', (req, res) => {
  const { id } = req.params;
  const sqlRemove = 'DELETE FROM creative_business.news WHERE id = ?';
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.put('/news/put/:id', (req, res) => {
  const { id } = req.params;
  const {
    title,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    FourthImageUrl,
    firstDesc,
    secondDesc,
    thirdDesc,
  } = req.body;
  const sqlUpdate =
    'UPDATE creative_business.news SET title=?,firstImageUrl=?,secondImageUrl=?,thirdImageUrl=?,FourthImageUrl=?,firstDesc=?,secondDesc=?,thirdDesc=? WHERE id=?';
  db.query(
    sqlUpdate,
    [
      title,
      firstImageUrl,
      secondImageUrl,
      thirdImageUrl,
      FourthImageUrl,
      firstDesc,
      secondDesc,
      thirdDesc,
      id,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});

app.get('/events/get', (req, res) => {
  const sqlGet =
    'SELECT id, title, ImgOne FROM creative_business.events ORDER BY id DESC;';
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get('/events/get/:id', (req, res) => {
  const { id } = req.params;
  const sqlGet = 'SELECT * FROM creative_business.events WHERE id=?';
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  if (!err) {
    console.log('event_provider server is running on port 5001');
  } else {
    console.log('Database connection failed for event_provider');
  }
});
