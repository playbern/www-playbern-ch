import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Partners } from "./blocks/partners";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { Video } from "./blocks/video";
import { Events } from "./blocks/events";
import { Nav } from "./blocks/nav";
import { Gallery } from "./blocks/gallery";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            if (block && block.__typename) {
              return (
                <div key={i} data-tina-field={tinaField(block)}>
                  <Block {...block} />
                </div>
              );
            } else {
              return null;
            }
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksVideo":
      return <Video data={block} />;
    case "PageBlocksEvents":
      return <Events data={block} />;
    case "PageBlocksNav":
      return <Nav data={block} />;
    case "PageBlocksGallery":
      return <Gallery data={block} />;
    case "PageBlocksPartners":
      return <Partners data={block} />;
    default:
      return null;
  }
};
