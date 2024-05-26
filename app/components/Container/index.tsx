import { Sidebar } from "~/components/Sidebar";
import { Header } from "~/components/Header";

type Props = {
  children: React.ReactNode;
  title: React.ComponentProps<typeof Header>["title"];
};

export function Container({ children, title }: Props) {
  return (
    <div className="w-screen p-14">
      <div className="rounded-md border bg-[rgb(5_5_32_/_44%)] backdrop-blur-3xl border-solid border-[rgb(5_5_32_/_44%)]">
        <div className="grid grid-cols-[0.3fr_1fr]">
          <Sidebar />

          {/* body  */}
          <section className="relative">
            <Header title={title} />
            <section className="py-2 px-4 overflow-auto h-[80vh]">
              {children}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
