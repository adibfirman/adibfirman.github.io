type Props = {
  messages: string[];
  time: string;
};

export function PersonChat({ messages, time }: Props) {
  return (
    <section className="grid grid-cols-[max-content_1fr] gap-x-3">
      <div className="w-[30px] h-[30px] relative">
        <img
          src="/profile.JPG"
          className="w-[inherit] h-[inherit] object-cover rounded-[50%]"
        />
        <span className="w-2.5 h-2.5 bg-green-500 absolute rounded-[50%] right-0 bottom-0" />
      </div>

      <div className="grid gap-y-1.5">
        <div className="grid grid-cols-[max-content_1fr] gap-x-1.5">
          <p className="text-sky-50 font-bold">Adib Firman</p>
          <span className="text-gray-400">{time}</span>
        </div>

        <section>
          {messages.map((message, index) => (
            <p key={index} className="text-sky-100">
              {message}
            </p>
          ))}
        </section>
      </div>
    </section>
  );
}
