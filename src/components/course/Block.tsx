import type { Block } from "@/data/course/types";
import { Markdown } from "./Markdown";
import { Layer } from "./Layer";
import { Callout } from "./Callout";

export function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "md":
      return <Markdown>{block.md}</Markdown>;
    case "layer":
      return (
        <Layer level={block.level} tag={block.tag}>
          {block.md ? <Markdown>{block.md}</Markdown> : null}
        </Layer>
      );
    case "callout":
      return (
        <Callout variant={block.variant} title={block.title}>
          <Markdown>{block.md}</Markdown>
        </Callout>
      );
  }
}
