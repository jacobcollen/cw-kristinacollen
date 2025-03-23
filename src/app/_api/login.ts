import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { getUserByUsername } from "@/server/queries";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Metoden stöds inte" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Användarnamn och lösenord krävs" });
  }

  try {
    const user = await getUserByUsername(username);
    
    if (!user) {
      return res.status(401).json({ success: false, message: "Ogiltiga uppgifter." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Ogiltiga uppgifter." });
    }

    return res.status(200).json({ success: true, message: "Inloggning lyckades." });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Serverfel." });
  }
}
