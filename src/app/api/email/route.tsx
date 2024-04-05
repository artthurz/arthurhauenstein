import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const request = req.clone();
  const data = await request.json();

  const payload = {
    from: {
      email: data.email,
    },
    personalizations: [
      {
        to: [
          {
            email: process.env.SEND_TO,
          },
        ],
        dynamic_template_data: data,
      },
    ],
    template_id: process.env.TEMPLATE_ID,
  };

  return await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
