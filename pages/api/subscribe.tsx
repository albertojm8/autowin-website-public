import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import fetch from "node-fetch";

type Data = {
  status: string;
  error?: string;
};

const Input = z.object({
  email: z.string().email()
});

const verifyEndpoint = "https://www.google.com/recaptcha/api/siteverify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("Message received");

  if (req.method === "POST") {
    try {
      // Validate request
      const data = Input.parse(req.body.data);
      const captcha = req.body.captcha;
      const { email } = data;

      console.log("Validating captcha", req.body);

      // Validate a "token" that the client-side reCAPTCHA script generated for the user
      const captchaResponse = await fetch(verifyEndpoint, {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.CAPTCHA_SECRET || "", // See prior section
          response: captcha, // the user's generated "Captcha" token
        }).toString(),
      }).then((res: { json: () => any; }) => res.json());

      // If the verification fails, return 500x code
      if (!captchaResponse.success) {
        return res
          .status(500)
          .json({ status: "error", error: captchaResponse["error-codes"][0] });
      }

      res.status(200).json({ status: "ok" });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ status: "error", error: "Internal Server Error" });
    }
  } else {
    res.status(404).json({ status: "error", error: "Not Found" }); // Unhandled HTTP request
  }
}