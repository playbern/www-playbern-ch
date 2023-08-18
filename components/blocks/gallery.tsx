import { Section } from "../util/section";
import { Container } from "../util/container";
import type { Template } from "tinacms";
import { PageBlocksGallery, PageBlocksGalleryItems  } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import ModalImage from 'react-modal-image';


export const Image = ({
    galleryColor,
    data,
  }: {
    galleryColor: string;
    data: PageBlocksGalleryItems;
  }) => {
    return (
      <div
        data-tina-field={tinaField(data)}
        className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
        style={{ flexBasis: "16rem" }}
        color={galleryColor}
      >
        {data.src && (
          <ModalImage
          data-tina-field={tinaField(data, "src")} 
          small={data.src}
          large={data.src}
          alt={data.alt}
          />
        )}
        {data.description && (
          <h4
            data-tina-field={tinaField(data, "description")}
            className="text-2xl font-semibold title-font"
          >
            {data.description}
          </h4>
        )}
      </div>
    );
  };

export const Gallery = ({ data }: { data: PageBlocksGallery }) => {
  return (
    <Section color={data.color}>
        {data.title && (
          <h3
          data-tina-field={tinaField(data, "title")}
          className="text-2xl text-center mt-4 font-semibold title-font"
        >
          {data.title}
          </h3> 
        )}
        
        <Container
          className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
          size="large"
        >
          {data.items &&
            data.items.map(function (block, i) {
              return <Image galleryColor={data.color} key={i} data={block} />;
            })}
        </Container>
      
    </Section>
  );
};

const defaultImage = {
    src:"/blocks/features.png",
    alt: "",
    description:""
}

export const galleryBlockSchema: Template = {
    name:"gallery",
    label: "Gallery",
    ui: {
        previewSrc: "/blocks/gallery.png",
        defaultItem: {
            items:[defaultImage]
        },
    },
    fields:[
      {
        name:"title",
        label:"Title",
        type:"string"
      },
      {
          type:"object",
          label:"Gallery Items",
          name:"items",
          list: true,
          ui: {
              itemProps: (item: any) => {
                return {
                  label: item?.description,
                };
              },
              defaultItem: {
                ...defaultImage,
              },
            },
          fields:[
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
              {
                  name: "description",
                  label: "Description",
                  type: "string"
              },
          ]
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
