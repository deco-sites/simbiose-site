import { Secret } from "apps/website/loaders/secret.ts";

export interface Props {
  mailerSendApiKey: Secret;
}

export type MailerSendKey = string;

/** @title MailerSend config setup */
export default function loader(
  { mailerSendApiKey }: Props,
): MailerSendKey {
  const key = typeof mailerSendApiKey === "string"
    ? mailerSendApiKey
    : mailerSendApiKey.get() as string;

  return key;
}
