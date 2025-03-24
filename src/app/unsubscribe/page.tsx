"use client";

import { PageThemeWrapper } from "../_components/PageThemeWrapper";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Unsubscribe() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  
  const [status, setStatus] = useState<"initial" | "loading" | "success" | "error">("initial");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (email) {
      setMessage(`Bekräfta att du vill avprenumerera på nyhetsbrevet: ${email}`);
    }
  }, [email]);
  
  async function handleUnsubscribe() {
    if (!email) {
      setStatus("error");
      setMessage("Ingen e-postadress hittades.");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Du har framgångsrikt avprenumererat.");
      } else {
        throw new Error("Något gick fel vid avprenumeration.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Ett oväntat fel inträffade.");
    }
  }

  return (
	<PageThemeWrapper>
    <Card>
      <CardHeader>
        <CardTitle>Avprenumerera</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {status === "initial" && <p>{message}</p>}
          {status === "loading" && <p>Bearbetar...</p>}
          {status === "success" && <p>{message}</p>}
          {status === "error" && <p className="text-red-500">{message}</p>}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {status === "initial" && email && (
          <Button onClick={handleUnsubscribe}>Avprenumerera</Button>
        )}
        {status === "loading" && <Button disabled>Laddar...</Button>}
        {status === "success" && <Button onClick={() => window.location.href = "/"}>Tillbaka till hemsidan</Button>}
        {status === "error" && <Button onClick={handleUnsubscribe}>Försök igen</Button>}
      </CardFooter>
    </Card>
	</PageThemeWrapper>
  );
}
