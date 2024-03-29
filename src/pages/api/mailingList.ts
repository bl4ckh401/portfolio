import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.mail;
  const url = `https://api.sendgrid.com/v3/marketing/contacts`;

  const data = {
    contacts: [{ email: email }],
    list_ids: ['87c37577-035f-48ca-8349-c366c6b299a8'],
  };
  const headers = {
    Authorization: `Bearer ${'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'}`,
    "Content-Type": "application/json",
  };

  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const json = await response.json();
  if (json.errors) {
    res.status(500).json({
      message:
        "Ooops, there was a problem with your subscription, please try again or contact us",
    });
  } else {
    res.status(200).json({
      message:
        "Your email has been succesfully added to the mailing list. Welcome 👋",
    });
  }
}