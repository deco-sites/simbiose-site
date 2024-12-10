import { AppContext } from "site/apps/site.ts";
import { CopyEmails, RecipientsEmails } from "site/sections/Contact.tsx";

export interface DataProps {
  name: string;
  email: string;
  tel: string;
  message: string;
}

export interface Props {
  data: DataProps;
  RecipientsEmailsArr: RecipientsEmails[];
  CopyToArr?: CopyEmails[];
  subject: string;
}

const sendEmail = async (
  props: Props,
  req: Request,
  ctx: AppContext,
) => {
  const { sendgrid } = ctx;
  console.log("Chamou a sendEmail");
  const msg = {
    "personalizations": [
      {
        "to": props.RecipientsEmailsArr.map((emailObj) => ({
          email: emailObj.email,
        })),

        // Adiciona "cc" apenas se props.CopyToArr existir e não for vazio
        ...(props.CopyToArr && props.CopyToArr.length > 0
          ? {
            "cc": props.CopyToArr.map((emailObj) => ({
              email: emailObj.email,
            })),
          }
          : {}),
      },
    ],
    "subject": props.subject,
    "from": {
      "email": "nao-responda@simbioseventures.com",
    },
    "content": [
      {
        "type": "text/plain",
        "value": props.data,
      },
    ],
  };

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sendgrid}`,
      },
      body: JSON.stringify(msg),
    });

    if (response.ok) {
      //console.log("Email sent successfully");
    } else {
      const errorData = await response.json();
      console.error("SendGrid API error:", errorData);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
