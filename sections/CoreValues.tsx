import { Device } from "apps/website/matchers/device.ts";
import { type FnContext } from "@deco/deco";
import CoreValuesIsland from "../islands/CoreValuesIsland.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/* @titleBy title */
interface CoreValue {
  icon: ImageWidget;
  title: string;
  /**
   * @format rich-text
   * @description the core value text
   */
  text: string;
}

interface Props {
  device: Device;
  values: CoreValue[];
}

export default function CoreValues(props: Props) {
  return <CoreValuesIsland device={props.device} values={props.values} />;
}

export const loader = (props: Props, req: Request, ctx: FnContext) => {
  return {
    ...props,
    device: ctx.device,
  };
};
