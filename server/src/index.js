const express = require('express');
const request = require('request');

const main = (app, port) => {
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  app.get('/words/:page', (req, res) => {
    const { page } = req.params;

    request(
      {
        url: `https://frontend-coding-challenge.s3.amazonaws.com/${page}.txt`,
      },
      (err, proxyRes, body) => {
        if (err || proxyRes.statusCode !== 200) {
          return res.statusCode(500).send();
        }

        return res.json({ body });
      }
    );
  });

  app.listen(port, () => console.log(`[app]: Listening on ${port}`));
};

main(express(), 9000);
