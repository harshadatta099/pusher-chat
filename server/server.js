const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware
const Pusher = require("pusher");

const app = express();
const port = 3000;

// Use bodyParser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

const pusher = new Pusher({
	appId: "1767202",
	key: "04110b925bdfe2cdce22",
	secret: "3891192fb9bd5ad1c937",
	cluster: "ap2",
	useTLS: true,
});

app.use(express.static("public"));

app.post("/send-message", (req, res) => {
	const message = req.body.message;
	pusher.trigger("my-channel", "my-event", { message });
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
