import { DrawPicture } from "./draw-picture";
import { DrawingResult } from "./drawing-result";

export function GuestbookSection() {
  return (
    <>
      <hr className="my-11 mx-auto border-mystic-mid" />

      <h1 className="text-base font-semibold mb-6 flex items-center gap-2 font-heading uppercase text-mystic-accent">
        say hi to everyone that you were here 👋🏼
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DrawPicture />
        <DrawingResult />
      </div>
    </>
  );
}
