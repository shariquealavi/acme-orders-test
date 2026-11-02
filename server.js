const http = require("http");
const port = Number(process.env.PORT || 4100);
http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ service: "orders", path: req.url }));
}).listen(port, () => console.log("orders listening on " + port));
