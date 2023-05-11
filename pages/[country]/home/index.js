import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ country }) {
  const [viewerCountry, setviewerCountry] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { country } = router.query;
    setviewerCountry(country);
  }, [country, router.isReady]);

  return (
    <>
      <h1>Home</h1>
      <p>Country: {viewerCountry}</p>
    </>
  );
}
