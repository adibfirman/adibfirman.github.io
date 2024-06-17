type LinkPreviewProps =
  | { variant: "simple"; siteName: string; icon: string; url: string }
  | {
      variant: "full";
      siteName: string;
      icon: string;
      url: string;
      desc: string;
    };

export function LinkPreview({ variant, ...props }: LinkPreviewProps) {
  if (variant === "simple") {
    return (
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-[repeat(2,max-content)] content-center items-center gap-x-1 w-max border rounded pt-0.5 pb-[3px] px-2 border-solid border-sky-100"
      >
        <img src={props.icon} className="w-4" />
        <p className="text-sky-100">{props.siteName}</p>
      </a>
    );
  }

  return <div>full WIP</div>;
}
