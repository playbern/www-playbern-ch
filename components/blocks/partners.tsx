import { Section } from "../util/section";
import { Container } from "../util/container";
import type { Template } from "tinacms";
import {
  PageBlocksPartners,
  PageBlocksPartnersItems,
} from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from 'next/image';

export const Partner = ({
  partnersColor,
  data,
}: {
  partnersColor: string;
  data: PageBlocksPartnersItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto py-12"
      style={{ flexBasis: "16rem" }}
      color={partnersColor}
    >
      {data.link && (
        <a data-tina-field={tinaField(data, "link")} href={data.link} target="_blank">
          {data.src && (
            <img
              className="md:max-h-28"
              data-tina-field={tinaField(data, "src")}
              src={data.src}
              alt={data.alt}
              // fill="true"
            />
          )}
          {data.description && (
            <h3
              data-tina-field={tinaField(data, "description")}
              className="text-2xl font-semibold title-font"
            >
              {data.description}
            </h3>
          )}
        </a>
      )}
    </div>
  );
};

export const Partners = ({ data }: { data: PageBlocksPartners }) => {
  return (
    <Section color={data.color}>

      {data.title && (
        <h3
        data-tina-field={tinaField(data, "title")}
        className="text-4xl text-center title-font mt-8"
        >
        {data.title}
        </h3>   
      )}

      <Container
        className={`grid gap-2 lg:grid-cols-6 text-left md:grid-cols-3`}
        size="small"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <Partner partnersColor={data.color} key={i} data={block} />;
          })}
      </Container>
      
    </Section>
  );
};

const defaultPartner = {
  src: "/blocks/features.png",
  alt: "",
  link: "",
  description: "",
};

export const partnersBlockSchema: Template = {
  name: "partners",
  label: "Partners",
  ui: {
    previewSrc: "/blocks/partners.png",
    defaultItem: {
      items: [defaultPartner, defaultPartner, defaultPartner],
    },
  },
  fields: [
    {
      name:"title",
      label:"Title",
      type:"string"
    },
    {
      type: "object",
      label: "Partner Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.link,
          };
        },
        defaultItem: {
          ...defaultPartner,
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
        {
          name: "link",
          label: "Link",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Description",
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
        { label: "White", value: "white" },
      ],
    },
  ],
};
