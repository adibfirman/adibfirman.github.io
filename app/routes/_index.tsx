import { Container } from "~/components/Container";
import { PersonChat } from "~/components/PersonChat";
import { PersonIsTyping } from "~/components/PersonIsTyping";
import { LinkPreview } from "~/components/LinkPreview";

import { getMetaSocialMedia } from "~/helpers/getMetaSocialMedia";

import { useCreateIntroMessages } from "~/hooks/useCreateIntroMessages";
import { json, useLoaderData } from "@remix-run/react";

export async function loader() {
  const metaSocialMedias = await getMetaSocialMedia();
  return json({ metaSocialMedias });
}

export default function Index() {
  const { metaSocialMedias } = useLoaderData<typeof loader>();
  const { time, messages, isTyping, isFinish } = useCreateIntroMessages();

  return (
    <Container title="home">
      <div className="pt-0 pb-4 px-2">
        <PersonChat messages={messages} time={time} />

        {isFinish && (
          <div className="px-10 my-4 flex gap-4">
            {metaSocialMedias.map((meta) => (
              <LinkPreview
                key={meta.siteName}
                variant="simple"
                url={meta.url}
                siteName={meta.siteName}
                icon={meta.icon}
              />
            ))}
          </div>
        )}
      </div>

      {isTyping && <PersonIsTyping />}
    </Container>
  );
}
