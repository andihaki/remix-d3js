import type { MetaFunction } from "@vercel/remix";
import BarChart from "~/components/BarChart";
import Bars from "~/components/Bars";
import Circle from "~/components/Circle";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix + D3</h1>

      <BarChart />
      <Bars />
      <Circle />
    </div>
  );
}
