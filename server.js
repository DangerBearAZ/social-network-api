const express = require('express'); 
const mongoose = require('mongoose'); 

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-homework', {
     useFindAndModify: false,
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

//log mongo queries being executed!
mongoose.set('debug', true );
// trying to fix DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`App 👂 on port ${PORT}`));