import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Ogiltiga uppgifter, försök igen.");
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
      <div>
        <label htmlFor="username" className="block text-sm font-medium">
          Användarnamn
        </label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Lösenord
        </label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" className="w-full">
        Logga in
      </Button>
    </form>
  );
}
