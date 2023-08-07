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
    <div
      data-tina-field={tinaField(data)}
      parentColor={imageColor}
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
    >
      {data.src && (
        <h3
        data-tina-field={tinaField(data, "src")}
        className="text-2xl font-semibold title-font">
          {data.src}
        </h3>
      )}
      {data.title && (
        <h3
          data-tina-field={tinaField(data, "title")}
          className="text-2xl font-semibold title-font"
        >
          {data.title}
        </h3>
      )}
      {data.alt && (
        <p
          data-tina-field={tinaField(data, "alt")}
          className="text-base opacity-80 leading-relaxed"
        >
          {data.alt}
        </p>
      )}
    </div>
  );
};

export const Gallery = ({ data }: { data: PageBlocksGallery }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
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
                type: "string",
                label: "Title",
                name: "title",
              },
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