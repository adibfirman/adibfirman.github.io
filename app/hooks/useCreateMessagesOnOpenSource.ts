import { useEffect } from "react";
import { useCreateMessages } from "~/hooks/useCreateMessages";

const MESSAGES = [
  "In here just a list of little fun stuff learning by doing on the web platform",
  "so creating something on Open-Source Software",
  "it's like I've been created a fun things and learning at the same time",
  "here's a popular one",
];

export const useCreateMessagesOnOpenSource = () => {
  const { messages, time, pushMessage, isTyping } =
    useCreateMessages("hai..!!");

  useEffect(() => {
    (async function initMessages() {
      for (const message of MESSAGES) {
        await pushMessage(message);
      }
    })();
  }, []);

  return { messages, time, isTyping };
};
