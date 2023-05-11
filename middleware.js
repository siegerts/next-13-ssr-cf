import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  const url = req.nextUrl.clone();
  console.log(req.method);

  if (url.pathname === "/") {
    // mapping of CloudFront-Viewer-Country to language code
    const countryCode = await JSON.parse(req.headers)[
      "cloudfront-viewer-country"
    ];

    console.log("country code: ", countryCode);

    const countryToLanguage = {
      US: "en-US",
      GB: "en-GB",
      CA: "en-CA",
      AU: "en-AU",
      NZ: "en-NZ",
      ZA: "en-ZA",
      IE: "en-IE",
      // IN: "en-IN",
      // SG: "en-SG",
      // PH: "en-PH",
      // MY: "en-MY",
      // ID: "en-ID",
      // PK: "en-PK",
      // AE: "en-AE",
      // HK: "en-HK",
      // NG: "en-NG",
      // GH: "en-GH",
      // KE: "en-KE",
      // TZ: "en-TZ",
    };

    // look up the language code for the country
    let languageCode = countryToLanguage[countryCode];

    if (languageCode) {
      console.log(`redirecting to /${languageCode}/home`);
      url.pathname = `/${languageCode}/home`;
      return NextResponse.redirect(url);
    }

    console.log("no country code found, redirecting to /home");
    return NextResponse.next(url);
  }
  return NextResponse.next();
}
