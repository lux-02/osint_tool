export default async function handler(req, res) {
  try {
    const apiKey = "2AC117C86538B4E8E84CE5D0AE36FB75";
    const ipAddress = req.query.ip;
    const apiUrl = `https://api.ip2location.io/?key=${apiKey}&ip=${ipAddress}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
}
