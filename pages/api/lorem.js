export default async function handler(req, res) {
	const answer = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
	res.status(200).json({ data: answer })
}
