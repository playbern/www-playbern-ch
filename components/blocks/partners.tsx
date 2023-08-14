import { Section } from "../util/section";
import { Container } from "../util/container";
import type { TinaTemplate } from "tinacms";
import {
  PageBlocksPartners,
  PageBlocksPartnersItems,
} from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

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
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
      color={partnersColor}
    >
      {data.link && (
        <a data-tina-field={tinaField(data, "link")} href={data.link} target="_blank">
          {data.src && (
            <img
              data-tina-field={tinaField(data, "src")}
              src={data.src}
              alt={data.alt}
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
      <div className="bg-repeat flex-1 text-gray-800  dark:from-gray-900 dark:to-gray-1000 flex flex-col" style={{ backgroundImage: "url('/playbern/background.png')",}}>

      {data.title && (
        <h3
        data-tina-field={tinaField(data, "title")}
        className="text-2xl text-center font-semibold title-font"
        >
        {data.title}
        </h3>   
      )}

      <Container
        className={`grid gap-2 grid-cols-8 text-left`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <Partner partnersColor={data.color} key={i} data={block} />;
          })}
      </Container>
      </div>
    </Section>
  );
};

const defaultPartner = {
  src: "/blocks/features.png",
  alt: "Alt Text",
  link: "https://www.sbb.ch/en",
  description: "Description",
};

export const partnersBlockSchema: TinaTemplate = {
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
      ],
    },
  ],
};
