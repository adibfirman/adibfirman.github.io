import { Container } from "~/components/Container";
import { PersonChat } from "~/components/PersonChat";
import { PersonIsTyping } from "~/components/PersonIsTyping";

import { useCreateMessagesOnOpenSource } from "~/hooks/useCreateMessagesOnOpenSource";
import { getExtractSiteDetail } from "~/helpers/getExtractSiteDetail";

export async function loader() {
  const fetching = await fetch(
    "https://github.com/adibfirman?tab=repositories"
  );
  const text = await fetching.text();
  getExtractSiteDetail(text);
  return null;
}

export default function Index() {
  const { messages, time, isTyping } = useCreateMessagesOnOpenSource();

  return (
    <Container title="open-source">
      <div className="pt-0 pb-4 px-2">
        <PersonChat messages={messages} time={time} />
      </div>

      {isTyping && <PersonIsTyping />}
    </Container>
  );
}
