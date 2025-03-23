"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Subscriber {
  id: number;
  email: string;
  createdAt: string;
}

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(() => {
    async function fetchSubscribers() {
      const res = await fetch("/api/newsletter/subscribers");
      const data = await res.json();
      setSubscribers(data);
    }
    fetchSubscribers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Nyhetsbrev-prenumeranter</h1>
      <ul className="mt-4">
        {subscribers.map((subscriber) => (
          <li key={subscriber.id} className="border p-2 mb-2 flex justify-between">
            <span>{subscriber.email}</span>
            <Button variant="destructive" onClick={() => console.log("Ta bort", subscriber.id)}>
              Ta bort
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
