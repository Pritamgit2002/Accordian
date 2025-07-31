import { Accordian } from "@/components/accordian";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-12 px-4 py-8 relative">
      {/* Toggle placed at top right */}
      <div className=" absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Accordian />
    </div>
  );
}
