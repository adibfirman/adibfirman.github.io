import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ClipboardText, Check } from "phosphor-react";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState, type PropsWithChildren } from "react";

export function Code(props: PropsWithChildren<HTMLElement>) {
  const [isCopyToClipboard, setCopyToClipboard] = useState(false);

  const handleClickToClipboard = async (code: string) => {
    try {
      if (!isCopyToClipboard) {
        await navigator.clipboard.writeText(code);
        setCopyToClipboard(true);

        let idDelay = setTimeout(() => {
          clearTimeout(idDelay);
          setCopyToClipboard(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const match = /lang-(\w+)/.exec(props.className || "");

  if (match) {
    const lang = match[1] || "javascript";
    const code = String(props.children).replace(/\n$/, "");

    return (
      <div className="my-8 rounded-xl border-white/10 border">
        <div className="rounded-t-[inherit] py-3 px-4 flex items-center justify-between gap-3 bg-slate-800">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 bg-red-400 rounded-full block" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full block" />
            <span className="w-3 h-3 bg-green-400 rounded-full block" />
          </div>
          <button
            onClick={() => handleClickToClipboard(code)}
            className={`text-sm font-semibold flex justify-center gap-1 ${isCopyToClipboard ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            {isCopyToClipboard ? (
              <>
                <span>Copied</span>
                <Check size={21} />
              </>
            ) : (
              <>
                <span>Copy</span>
                <ClipboardText size={21} />
              </>
            )}
          </button>
        </div>
        <SyntaxHighlighter
          {...props}
          style={nightOwl}
          showLineNumbers
          lineNumberStyle={{
            fontFamily: "var(--default-font-family)",
            fontStyle: "normal",
          }}
          customStyle={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-base)",
            borderRadius: "inherit",
            margin: 0,
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-base)",
            },
          }}
          PreTag="div"
          language={lang}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <code className="rounded-sm bg-mystic-surface/40 border border-slate-800 font-mono text-sm font-semibold">
      `{props.children}`
    </code>
  );
}
