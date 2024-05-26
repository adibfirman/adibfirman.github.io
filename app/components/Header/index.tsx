import { Hash } from "react-feather";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <div className="py-2 px-4 border-b-[rgb(85_88_92_/_51%)] border-b border-solid w-full h-14 grid grid-cols-[max-content_1fr] content-center items-center justify-items-start gap-x-1.5">
      <Hash color="#b2b2bc" />
      <h1 className="text-2xl text-[#b2b2bc] font-bold font-grandstander">
        {title}
      </h1>
    </div>
  );
}
