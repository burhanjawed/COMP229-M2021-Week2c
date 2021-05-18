import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname: string = '127.0.0.1';
const port: number = 3000;

console.log(__dirname);

const server: http.Server = http.createServer((req, res) => 
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});