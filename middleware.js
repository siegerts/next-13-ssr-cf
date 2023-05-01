import { NextResponse } from "next/server";

export default function middleware(req, res) {
  // const { cookies, headers } = req;

  console.log(req.method);
  console.log("HEADERS -- MIDDLEWARE");
  console.log(req.headers);

  return NextResponse.next();
}
