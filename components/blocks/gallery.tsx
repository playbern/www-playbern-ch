import { Section } from "../util/section";
import { Container } from "../util/container";
import { PageBlocksGallery, PageBlocksGalleryItems, } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";


export const Image = ({
  imageColor,
  data,
}: {
  imageColor: string;
  data: PageBlocksGalleryItems;
}) => {
  return (
    <div data-tina-field={tinaField(data)} className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto" style={{ flexBasis: "16rem" }}>

    {data.src && (
        <img
        data-tina-field={tinaField(data, "src")}
        className="h-auto max-w-full rounded-lg"
        src={data.src}
        alt={data.alt} />
        )}
    </div>
  );
};

export const Gallery = ({ data }: { data: PageBlocksGallery }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`grid grid-cols-2 md:grid-cols-3 gap-4`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <Image imageColor={data.color} key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};

const defaultImage = {
  title:"Default Image",
  src: "/blocks/features.png",
  alt: "Gallery image"
}

export const galleryBlockSchema = {
    name:"gallery",
    label: "Gallery",
    ui: {
        previewSrc: "/blocks/features.png",
        defaultItem: {
            items:[defaultImage, defaultImage, defaultImage]
        },
    },
    fields:[
        {
            type: "object",
            label: "Gallery Items",
            name: "items",
            list: true,
            ui: {
              itemProps: (item) => {
                return {
                  label: item?.title,
                };
              },
              defaultItem: {
                ...defaultImage,
              },
            },
            fields: [
              {
                name: "src",
                label: "Image Source",
                type: "image",
              },
              {
                name: "alt",
                label: "Alt Text",
                type: "string",
              },
            ],
        },
        {
            type: "string",
            label: "Color",
            name: "color",
            options: [
              { label: "Default", value: "default" },
              { label: "Tint", value: "tint" },
              { label: "Primary", value: "primary" },
            ],
        },
    ]
}