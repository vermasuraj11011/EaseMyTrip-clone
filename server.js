const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connect = () => {
	return mongoose.connect('mongodb://127.0.0.1:27017/easeMyTrip');
};

const flightSchema = new mongoose.Schema(
	{
		id: { type: Number, required: true },
		airline_name: { type: String, required: true },
		aircraft_number: { type: Number, required: false },
		takeoff_time: { type: String, required: true },
		landing_time: { type: String, required: true },
		source: { type: String, required: true },
		journey_date: { type: String, required: true },
		destination: { type: String, required: true },
		price: { type: Number, required: true },
		aircraft_code: { type: String, required: true }
	},
	{
		versionKey: false, // will not show _v
		timestamps: true // createdAt, updatedAt
	}
);

const Flight = new mongoose.model('flights', flightSchema);

// const UserSchema = new mongoose.Schema(
// 	{
// 		email_id: { type: String, required: true },
// 		password: { type: String, required: true }
// 	},
// 	{
// 		versionKey: false, // will not show _v
// 		timestamps: true // createdAt, updatedAt
// 	}
// );

// const User = new mongoose.model('user', UserSchema);

app.get('/flights', async (req, res) => {
	const flights = await Flight.find().lean().exec(); //db.users.find() lean() is used  to make user json object and exec is used to return proper promise

	return res.status(200).send({ flights });
});

app.get('/flights/:id', async (req, res) => {
	const flight = await Flight.findById(req.params.id).lean().exec();

	return res.status(200).send({ flight });
});
// app.get('/flights/:date', async (req, res) => {
// 	const flight = await Flight.find({ journey_date: req.params.date }).lean().exec();

// 	return res.status(200).send({ flight });
// });

app.get('/flights/:source/:destination', async (req, res) => {
	const flight = await Flight.find({ source: req.params.source, destination: req.params.destination }).lean().exec();

	return res.status(200).send({ flight });
});
app.get('/flights/date/:source/:destination/:date', async (req, res) => {
	const flight = await Flight.find({
		source: req.params.source,
		destination: req.params.destination,
		journey_date: req.params.date
	})
		.sort({ takeoff_time: 1 })
		.lean()
		.exec();

	return res.status(200).send({ flight });
});

app.get('/flights/price/:source/:destination/:date', async (req, res) => {
	const flight = await Flight.find({
		source: req.params.source,
		destination: req.params.destination,
		journey_date: req.params.date
	})
		.sort({ price: 1 })
		.lean()
		.exec();

	return res.status(200).send({ flight });
});

// adding user data in the data base
// app.post('/users', async (req, res) => {
// 	const user = await User.create(req.body); // db.users.insert()

// 	return res.status(201).send({ user });
// });

app.listen(5005, async () => {
	await connect();
	console.log('listerning to the port 5005');
});
