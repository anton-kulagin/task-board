import express from 'express';
// import bodyParser from 'body-parser';

export default function testServer({port, dir}) {

  const app = express();

  // const router = express.Router();
  app.use(express.static(dir));


  // app.use(express.json());       // to support JSON-encoded bodies
  // app.use(express.urlencoded()); // to support URL-encoded bodies

  /** bodyParser.urlencoded(options)
   * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
   * and exposes the resulting object (containing the keys and values) on req.body
   */
  // app.use(bodyParser.urlencoded({
  //   extended: true
  // }));

  /**bodyParser.json(options)
   * Parses the text as JSON and exposes the resulting object on req.body.
   */
  // app.use(bodyParser.json());


  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });

}
