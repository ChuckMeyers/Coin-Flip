const path = require('path');
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.static(path.join(__dirname + '/public')))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


