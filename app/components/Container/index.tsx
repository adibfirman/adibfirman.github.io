import { Sidebar } from "~/components/Sidebar";
import { Header } from "~/components/Header";

export function Container() {
  return (
    <div className="w-screen p-32">
      <div className="rounded-md border bg-[rgb(5_5_32_/_44%)] backdrop-blur-2xl border-solid border-[rgb(5_5_32_/_44%)]">
        <div className="grid grid-cols-[0.3fr_1fr]">
          <Sidebar />
          <Header />
        </div>
      </div>
    </div>
  );
}
