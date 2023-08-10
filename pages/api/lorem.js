export default async function handler(req, res) {
	const response = await fetch(
		'https://baconipsum.com/api/?type=meat-and-filler'
	)
	const lorem = response.json()
	res.status(200).json({ data: answer })
}
