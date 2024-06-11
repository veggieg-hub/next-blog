// pages/api/example.js

export default function handler(req, res) {
    console.log('Received API request:', req.method, req.url);
    res.status(200).json({ message: 'Hello' });
  }
  