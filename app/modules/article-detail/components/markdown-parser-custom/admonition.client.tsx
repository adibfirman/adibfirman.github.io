import { Info, WarningOctagon, Lightbulb } from "phosphor-react";
import type React from "react";

type Props = { type: string };

const blockEle = getComputedStyle(document.documentElement);
const colorYellow500 = blockEle.getPropertyValue("--color-yellow-500");
const colorBlue00 = blockEle.getPropertyValue("--color-blue-500");
const colorGreen500 = blockEle.getPropertyValue("--color-green-500");

export function Admonition(props: React.PropsWithChildren<Props>) {
  const { type, children } = props;

  const styles: Record<string, string> = {
    note: "border-l-4 border-blue-500 bg-blue-500/10",
    warning: "border-l-4 border-yellow-500 bg-yellow-500/10",
    tip: "border-l-4 border-green-500 bg-green-500/10",
  };

  const icons: Record<string, React.ReactNode> = {
    note: <Info size={28} color={colorBlue00} className="inline-block mr-2" />,
    warning: (
      <WarningOctagon
        color={colorYellow500}
        size={28}
        className="inline-block mr-2"
      />
    ),
    tip: (
      <Lightbulb
        size={28}
        color={colorGreen500}
        className="inline-block mr-2"
      />
    ),
  };

  return (
    <div className={`p-3 rounded-md my-3 ${styles[type] || ""}`}>
      <div className="font-bold mb-1 flex items-center text-lg leading-7">
        {icons[type]} {type[0].toUpperCase() + type.slice(1)}
      </div>
      <div className="text-lg leading-7">{children}</div>
    </div>
  );
}
