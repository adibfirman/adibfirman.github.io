import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Adib Firman | Web Platform Engineer" }];
};

export default function Index() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
