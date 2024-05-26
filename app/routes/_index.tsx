import { Container } from "~/components/Container";
import { PersonChat } from "~/components/PersonChat";
import { PersonIsTyping } from "~/components/PersonIsTyping";

import { useIntro } from "~/hooks/useIntro";

export default function Index() {
  const { time, messages, showIsTyping } = useIntro();

  return (
    <Container title="home">
      <div className="pt-0 pb-4 px-2">
        <PersonChat messages={messages} time={time} />
      </div>
      {showIsTyping && <PersonIsTyping />}{" "}
    </Container>
  );
}
