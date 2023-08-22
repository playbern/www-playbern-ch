import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../layout";
import format from "date-fns/format";
import { ProgramType } from "../../pages/programs";

export const Programs = ({ data }: { data: ProgramType[] }) => {
  const theme = useTheme();
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-gray-1000 dark:group-hover:text-white-100",
  };

  return (
    <>
      <h1
        className="m-8 text-5xl font-extrabold tracking-wide title-font z-20"
      >Programm</h1>

      {data.map((programData) => {
        const program = programData.node;

        const datestart = new Date(program.datestart);
        let formattedDateFrom = "";
        if (!isNaN(datestart.getTime())) {
          formattedDateFrom = format(datestart, "HH:mm dd.MM.yyyy");
        }
        const datefinish = new Date(program.datefinish);
        let formattedDateTo = "";
        if (!isNaN(datefinish.getTime())) {
          formattedDateTo = format(datefinish, "HH:MM dd.MM.yyyy");
        }
        let categoryImg = "";
        if (program.category) {
          categoryImg = '/uploads/global/category-' + program.category + '.png';
        }

        return (
          <Link
            key={program._sys.filename}
            href={`/programs/` + program._sys.filename}
            className="group block px-6 sm:px-8 md:px-10 py-10 mb-8 last:mb-0 bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-1000 rounded-md shadow-sm transition-all duration-150 ease-out hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800"
          >
            <div className="float-right">
              {program?.category !== "" && (
                <>
                  <img src={categoryImg}
                      title={program.category} 
                      className="mx-16 w-24" 
                      />
                </>
              )}
            </div>
            <div>
              <p
                className="text-base font-bold"
              >
              
                {formattedDateFrom !== "" && (formattedDateFrom)}
                <span className="dark:text-gray-500 mx-2">
                    —
                </span>
                {formattedDateTo !== "" && (formattedDateTo)}
              </p>
            </div>
            <h3
              className={`text-gray-700 dark:text-white text-3xl lg:text-4xl font-semibold title-font mb-5 transition-all duration-150 ease-out ${
                titleColorClasses[theme.color]
              }`}
            >
              {program.title}{" "}
              <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
              </span>
            </h3>
            <div className="prose dark:prose-dark w-full max-w-none mb-5 opacity-70">
              <TinaMarkdown content={program.summary} />
            </div>
          </Link>
        );
      })}
    </>
  );
};
