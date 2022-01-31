/**
 * Router for destination locations
 */
import { Router } from 'express';
import { login, sendMessage } from '../service/messageSender';

let router = Router();
/* GET list of destination locations */
router.post('/', async function(req, res) {
  // Grab the email and body of the person to send message to from the body
  let to = req.body.to;
  let message = req.body.message;
  await login();
  let resp = await sendMessage(to, message);
  if (resp.status > 400) {
    res.status(500).send('failed');
    return;
  }
  res.status(resp.status).send('Done!');
});

export default router;
