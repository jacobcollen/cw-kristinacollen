"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function AdminDashboard() {
  const [subscribers, setSubscribers] = useState<{ email: string }[]>([]);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");
  const [emailContent, setEmailContent] = useState("");

  useEffect(() => {
    fetch("/api/subscribers")
      .then((res) => res.json())
      .then((data) => setSubscribers(data));
  }, []);

async function sendNewsletter(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  await fetch("/api/send-newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: emailContent }),
  });
  alert("Nyhetsbrev skickat!");
}

  async function postNews(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/post-news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newsTitle, text: newsText }),
    });
    alert("Nyhet publicerad!");
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 mb-16">
      <h1 className="text-2xl font-bold">Mammas dashboard 💕</h1>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Prenumeranter ({subscribers.length})</h2>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            {subscribers.map((sub, idx) => (
              <li key={idx}>{sub.email}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Skicka nyhetsbrev</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={sendNewsletter} className="space-y-4">
            <Textarea
              placeholder="Skriv ditt nyhetsbrev här..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />
            <Button type="submit" className="w-full">Skicka</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Lägg upp nyhet</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={postNews} className="space-y-4">
            <Input
              placeholder="Titel"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
            />
            <Textarea
              placeholder="Nyhetstext"
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
            />
            <Button type="submit" className="w-full">Publicera</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
