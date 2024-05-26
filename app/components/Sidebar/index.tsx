import { AccordionMenu } from "./AccordionMenu";

export function Sidebar() {
  return (
    <div className="border-r-[rgb(85_88_92_/_51%)] border-r border-solid">
      {/* top header */}
      <div className="border-b-[rgb(85_88_92_/_51%)] border-b border-solid h-14">
        <div className="py-2 px-4">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-[#b2b2bc] font-bold text-2xl font-grandstander">
              Adib Firman
            </h3>
            <img
              className="object-cover w-10 h-10 rounded-[50%]"
              src="/profile.JPG"
            />
          </div>
        </div>
      </div>

      {/* sub menu */}
      <div className="py-2 px-4">
        <AccordionMenu
          title="Channel"
          isOpened
          menus={[
            { title: "home", path: "/", isActivated: true },
            { title: "open-source", path: "/open-source" },
          ]}
        />
        <AccordionMenu title="Blog" isOpened={false} menus={[]} />
      </div>
    </div>
  );
}
