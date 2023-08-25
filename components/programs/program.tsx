import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import format from "date-fns/format";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ProgramType } from "../../pages/programs/[filename]";
import { tinaField } from "tinacms/dist/react";
import Image from 'next/image';

export const Program = (props: ProgramType) => {
  const theme = useTheme();
  const titleColorClasses = {
    blue: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500",
    teal: "from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-300 to-pink-500",
    purple:
      "from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500",
    orange:
      "from-orange-300 to-orange-600 dark:from-orange-200 dark:to-orange-500",
    yellow:
      "from-gray-1000 to-gray-900 dark:from-yellow-300 dark:to-yellow-500",
  };

  const datestart = new Date(props.datestart);
  let formattedDateFrom = "";
  if (!isNaN(datestart.getTime())) {
    formattedDateFrom = format(datestart, "HH:mm");
  }
  const datefinish = new Date(props.datefinish);
  let formattedDateTo = "";
  if (!isNaN(datefinish.getTime())) {
    formattedDateTo = format(datefinish, "HH:mm — dd.MM.yyyy");
  }
  let categoryImg = "";
  if (props.category) {
    categoryImg = '/uploads/global/category-' + props.category + '.png';
  }

  return (
    <Section className="flex-1 bg-white">
      <Container width="small" className={`flex-1 pb-2`} size="large">
        <h2
          data-tina-field={tinaField(props, "title")}
          className={`w-full relative	mb-8 text-6xl font-extrabold tracking-normal text-center title-font`}
        >
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${
              titleColorClasses[theme.color]
            }`}
          >
            {props.title}
          </span>
        </h2>
        <div
          className="flex items-center justify-center mb-16"
        >
          <p data-tina-field={tinaField(props, "category")}>
            <img 
              src={categoryImg}
              title={props.category} 
              alt={props.category} 
              className="mx-16 w-24" 
              // fill="true"
            />
          </p>
          <p
            data-tina-field={tinaField(props, "datestart")}
            className="text-base font-bold"
          >
            {formattedDateFrom}
            <span className="dark:text-gray-500 mx-1">
                -
            </span>
            {formattedDateTo}
          </p>
        </div>
      </Container>
      <Container className={`flex-1 pt-4`} width="small" size="large">
        <div
          data-tina-field={tinaField(props, "_body")}
          className="prose dark:prose-dark w-full max-w-none"
        >
          <TinaMarkdown content={props._body} />
        </div>
      </Container>
      {props.heroImg && (
        <div className="px-4 w-full">
          <div
            data-tina-field={tinaField(props, "heroImg")}
            className="relative max-w-4xl lg:max-w-5xl mx-auto"
          >
            <img
              src={props.heroImg}
              alt={props.title}
              className="absolute block rounded-lg w-full h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              aria-hidden="true"
              // fill="true"
            />
            <img
              src={props.heroImg}
              alt={props.title}
              className="relative z-10 mb-14 block rounded-lg w-full h-auto opacity-100"
              // fill="true"
            />
          </div>
        </div>
      )}
    </Section>
  );
};
