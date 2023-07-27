import { PageBlocksEvents, PageBlocksEventsItems } from '../../tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';
import { Container } from '../util/container';
import { Section } from '../util/section';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import React from 'react';

export const Event = ({ eventColor, data }: { eventColor: string; data: PageBlocksEventsItems }) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: '16rem' }}
    >
      {data.image && (
        <div
          data-tina-field={tinaField(data.image, 'src')}
          className="relative row-start-1 md:col-span-2 flex justify-center"
        >
          <img
            className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
            src={data.image.src}
            alt={data.image.alt}
            aria-hidden="true"
          />
          <img
            className="relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
            alt={data.image.alt}
            src={data.image.src}
          />
        </div>
      )}
      {data.body && (
        <div
          data-tina-field={tinaField(data.body, 'body')}
          className={`prose prose-lg mx-auto md:mx-0 mb-10 
          ${ eventColor === 'primary' ? `prose-primary` : eventColor === 'tint' ? `prose-tint` : `dark:prose-dark`}`}
        >
        <TinaMarkdown content={data.body} />
        </div>
      )}
    </div>
  );
};

export const Events = ({ data }: { data: PageBlocksEvents }) => {
  return (
    <Section color={data.color}>
      <Container className={`flex flex-wrap gap-x-10 gap-y-8 text-left`} size="large">
        {data.items &&
          data.items.map(function (block, i) {
            return <Event eventColor={data.color} key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};

export const defaultEvent = {
  text: 'Your events title, link and description',
  image: {
    src: '/blocks/features.png',
    alt: 'Add a short explanation of the image',
  },
};

export const eventBlockSchema = {
    name: 'events',
    label: 'Events',
    ui: {
      previewSrc: '/blocks/hero.png',
      defaultItem: {
        items: [defaultEvent, defaultEvent],
      },
    },
    fields: [
      {
        type: 'object',
        label: 'Event Items',
        name: 'items',
        list: true,
        ui: {
          itemProps: (item) => {
            return {
              label: item?.title,
            };
          },
          defaultItem: {
            ...defaultEvent,
          },
        },
        fields: [
          {
            type: 'object',
            label: 'Image',
            name: 'image',
            fields: [
              {
                name: 'src',
                label: 'Image Source',
                type: 'image',
              },
              {
                name: 'alt',
                label: 'Alt Text',
                type: 'string',
              },
            ],
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
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
  