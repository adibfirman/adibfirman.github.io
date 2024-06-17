import { useEffect, useState } from "react";
import { useCreateMessages } from "~/hooks/useCreateMessages";

const MESSAGES = [
  `Wait wait, give me a moment please`,
  `Let me try to introduce my self first`,
  `My Name is Adib Firman and I am a Web Platform Engineer based in Indonesia.`,
  `On this platform, I write some posts about web technology and show some of my open-source stuff.`,
  `You can check it by accessing on the left sidebar though.`,
  `Thank you and let's connect then.`,
];

export function useCreateIntroMessages() {
  const [isFinish, setIsFinish] = useState(false);
  const createMessage = useCreateMessages("Ohh hi there...");

  useEffect(() => {
    (async function initMessages() {
      for (const message of MESSAGES) {
        await createMessage.pushMessage(message);
      }

      setIsFinish(true);
    })();
  }, []);

  return {
    time: createMessage.time,
    isTyping: createMessage.isTyping,
    messages: createMessage.messages,
    isFinish,
  };
}
