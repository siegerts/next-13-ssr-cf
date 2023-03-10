// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ status: "ok", ...req.body });
  } else if (req.method === "GET") {
    // Process a GET request
    res.status(200).json({ name: "John Doe" });
  } else if (req.method === "PUT") {
    res.status(200).json({ status: "ok", ...req.body });
  } else if (req.method === "DELETE") {
    res.status(200).json({ status: "ok" });
  } else {
    res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
