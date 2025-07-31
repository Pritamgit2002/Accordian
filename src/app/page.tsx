import { Accordian } from "@/components/accordian";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-12 px-4 py-8">
      {/* Toggle placed at top right */}
      <div className="w-full flex justify-end">
        <ModeToggle />
      </div>

      <Accordian />
    </div>
  );
}
