// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  let username: string = '';

  if (Array.isArray(req.query.username)) {
    username = req.query.username.toString();
  } else {
    username = req.query.username || '';
  }

  res.status(200).json({ name: username || 'John Doe' });
  // res.status(200).send('<html><body><h1>HOLA QUE TAL</h1></body></html>')
}
