import { useEffect, useState } from "react";
import { wait } from "~/helpers/wait";

type PushMessageParams = {
  message: string;
  timeToTheNextMessage?: number;
};

export function useIntro() {
  const [messages, setMessages] = useState<string[]>(["Ohh hello there..."]);
  const [showIsTyping, setShowIsTyping] = useState(false);

  const time = (() => {
    const currDate = new Date();
    const currentTime = currDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return currentTime;
  })();

  const pushMessage = async ({
    message,
    timeToTheNextMessage = 1500,
  }: PushMessageParams) => {
    setShowIsTyping(true);
    await wait(timeToTheNextMessage);
    setMessages((prevState) => [...prevState, message]);
    setShowIsTyping(false);

    await wait(1000);
  };

  useEffect(() => {
    (async function initMessages() {
      await pushMessage({
        message: `Wait wait, give me a moment please`,
      });

      await pushMessage({
        message: "Let me try to introduce my self first",
        timeToTheNextMessage: 2000,
      });
      await pushMessage({
        message: `My Name is Adib Firman and I am a Web Platform Engineer based in Indonesia.`,
        timeToTheNextMessage: 2500,
      });

      await pushMessage({
        message: `On this platform, I write some posts about web technology and show some of my open-source stuff.`,
        timeToTheNextMessage: 2000,
      });

      await pushMessage({
        message: `You can check it by accessing on the left sidebar though.`,
      });

      return () => {
        setMessages([]);
      };
    })();
  }, []);

  return { time, showIsTyping, messages };
}
