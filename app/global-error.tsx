"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    // You can log the error to the console or a custom logging service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Something went wrong!" />
      </body>
    </html>
  );
}
