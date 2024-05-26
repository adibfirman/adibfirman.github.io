import { Container } from "~/components/Container";
import { PersonChat } from "~/components/PersonChat";
import { PersonIsTyping } from "~/components/PersonIsTyping";

export default function Index() {
  return (
    <Container title="home">
      <div className="pt-0 pb-4 px-2">
        <PersonChat
          messages={Array(10).fill("Ohh Hello...!!")}
          time="1:15 PM"
        />
      </div>

      <PersonIsTyping />
    </Container>
  );
}
