import NavBar from "@/app/components/NavBar";
import { createClient } from "@/prismicio";
import WordMark from "./WordMark";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <NavBar settings={settings} />
      <WordMark />
    </header>
  );
}
