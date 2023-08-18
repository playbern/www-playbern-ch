import { PageBlocksPrograms, PageBlocksProgramsItems } from '../../tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';
import { Container } from '../util/container';
import { Section } from '../util/section';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import type { Template } from "tinacms";
import React from 'react';

export const Program = ({ data }: { data: PageBlocksProgramsItems }) => {
  return (
      <div
        data-tina-field={tinaField(data)}
        className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
        style={{ flexBasis: '16rem' }}
      >
        {data.body && (
          <div
            data-tina-field={tinaField(data.body, 'body')}
            className={`prose prose-lg mx-auto md:mx-0 mb-10`}
          >
            <TinaMarkdown content={data.body} />
          </div>
        )}
      </div>
  );
};

export const Programs = ({ data }: { data: PageBlocksPrograms }) => {
  return (
    <Section color={data.color ? data.color: ''}>
      <Container className={`flex flex-wrap gap-x-10 gap-y-8 text-left`} size="large">
        {data.items &&
          data.items.map(function (block, i) {
            if (!block) return null;
            return <Program key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};


const defaultProgram = {
  summary: "",
  body: "",
};

export const programsBlockSchema: Template = {
  label: "Program",
  name: "program",
  ui: {
    previewSrc: "/blocks/partners.png",
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "object",
      label: "Program Items",
      name: "items",
      list: true,
      ui: {
        router: ({ document }) => {
          return `/programs/${document._sys.filename}`;
        },
      }
    }
  ],
};