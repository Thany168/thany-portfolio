export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, phonenumber, email, message } = req.body;

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.ChID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ error: "Server error" });
  }

  const text = `New Contact Form Message:\n\nName: ${name}\nPhone: ${phonenumber}\nEmail: ${email}\nMessage: ${message}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      }
    );

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ error: "Telegram failed" });
    }
  } catch (err) {
    res.status(500).json({ error: "Network error" });
  }
}
