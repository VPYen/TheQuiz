// Libraries
const app = require("express");

const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});