const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("KS3: автодеплой на Render работает!"));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
