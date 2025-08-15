import { AppContext } from "site/apps/site.ts";
import { CopyEmails, RecipientsEmails } from "site/sections/Contact.tsx";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

export interface Props {
  data: string;
  RecipientsEmailsArr: RecipientsEmails[];
  CopyToArr?: CopyEmails[];
  subject: string;
}

const sendEmail = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
) => {
  const { MailerSendKey } = ctx;

  if (!MailerSendKey) {
    console.error("MailerSend API key não configurada.");
    return;
  }

  try {
    const mailerSend = new MailerSend({ apiKey: MailerSendKey });

    const sentFrom = new Sender(
      "comercial@simbioseventures.com",
      "Comercial Simbiose",
    );

    const toRecipients = props.RecipientsEmailsArr.map(
      (emailObj) => new Recipient(emailObj.email),
    );

    const ccRecipients = props.CopyToArr?.map(
      (emailObj) => new Recipient(emailObj.email),
    ) || [];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(toRecipients)
      .setCc(ccRecipients)
      .setSubject(props.subject)
      .setText(props.data);

    const res = await mailerSend.email.send(emailParams);
    console.log("E-mail enviado com sucesso", res.body);
  } catch (error) {
    console.error("Erro ao enviar e-mail com MailerSend:", error);
  }
};

export default sendEmail;
