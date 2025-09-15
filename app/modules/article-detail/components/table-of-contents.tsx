import type { TableOfContentItems } from "../types";

type Props = {
  tocItems: TableOfContentItems[];
  activeId: string;
  minLevelToc: number;
};

export function TableOfContents(props: Props) {
  return (
    <div className="hidden lg:block sticky top-32 self-start">
      {props.tocItems.length > 0 && (
        <div className="w-max">
          <h2 className="text-base font-semibold text-mystic-accent-light mb-4 flex items-center gap-2 font-heading uppercase">
            Table of Contents
          </h2>
          <nav>
            <ul className="space-y-1">
              {props.tocItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className={`${props.activeId === item.id ? "text-mystic-accent-hover" : "hover:text-mystic-accent-hover"} hover:underline transition-colors block py-1 font-body text-xs font-semibold`}
                    style={{
                      paddingLeft: `${(item.level - props.minLevelToc) * 0.75}rem`,
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
