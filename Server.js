const express = require('express');
const app = express();
app.use(express.json({ extended: false }));

// app.post('/', (req, res) => res.send('API running'));

const details = {
	email: '',
	url: '',
};

app.post('/', (req, res) => {
	const { email, url } = req.body;
	// const url = req.body.url;
	res.send(email);
	console.log(req.body);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
