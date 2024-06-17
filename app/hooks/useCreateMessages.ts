import { useState, useEffect } from "react";
import { createMockTime } from "~/helpers/createMockTime";
import { createCalculationMessageTime } from "~/helpers/createCalculationMessageTime";

export const useCreateMessages = (initMessage: string = "") => {
  const [messages, setMessages] = useState<string[]>([initMessage]);
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

  const pushMessage = async (message: (typeof messages)[number]) => {
    setShowIsTyping(true);

    const gapTimeToTheNextMessage = createCalculationMessageTime(message);
    await createMockTime(gapTimeToTheNextMessage);

    setMessages((prevState) => [...prevState, message]);
    setShowIsTyping(false);

    await createMockTime(1000);
  };

  useEffect(() => {
    return () => {
      setMessages([initMessage]);
    };
  }, []);

  return { messages, isTyping: showIsTyping, time, pushMessage };
};
