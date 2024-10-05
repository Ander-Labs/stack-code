import { ModeToggle } from "./modeToggle";

export default function Header() {
  return (
    <>
      <header className="text-3xl font-bold underline flex justify-around py-6 border-b">
        <h2>Stack Code</h2>
        <ModeToggle />
      </header>
    </>
  );
}
