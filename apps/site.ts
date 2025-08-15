import website, { Props } from "apps/website/mod.ts";
import manifest, { Manifest } from "../manifest.gen.ts";
import { MailerSendKey } from "site/loaders/mailerSendConfig.ts";
import { type App, type AppContext as AC } from "@deco/deco";
type WebsiteApp = ReturnType<typeof website>;
export interface SiteProps extends Props {
  MailerSendKey: MailerSendKey;
}
/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8
 */
export default function Site(
  { MailerSendKey, ...state }: SiteProps,
): App<Manifest, SiteProps, [
  WebsiteApp,
]> {
  return {
    state: {
      MailerSendKey,
      ...state,
    },
    manifest,
    dependencies: [
      website(state),
    ],
  };
}
export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
