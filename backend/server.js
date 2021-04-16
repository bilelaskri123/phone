const  express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const Contact = require('./models/Contact');
// Contact.sync();

const contactRoutes = require('./routes/contact.routes');

app.use('/contacts', contactRoutes);
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
