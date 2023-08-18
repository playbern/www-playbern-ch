import * as React from "react";
import { NavActions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import type { TinaTemplate } from "tinacms";
import { PageBlocksNav } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Nav = ({ data }: { data: PageBlocksNav }) => {
    const theme = useTheme();
    const headlineColorClasses = {
        blue: "from-blue-400 to-blue-600",
        teal: "from-teal-400 to-teal-600",
        green: "from-green-400 to-green-600",
        red: "from-red-400 to-red-600",
        pink: "from-pink-400 to-pink-600",
        purple: "from-purple-400 to-purple-600",
        orange: "from-orange-300 to-orange-600",
        yellow: "from-gray-1000 to-gray-1000",
    };

    return (
        <Section color={data.color}>
                <Container size="small" className="py-0">            
                {data.actions && (
                    <div className="grid py-0 justify-items-center">
                        <NavActions
                            className="flex items-center"
                            parentColor={data.color}
                            actions={data.actions} />
                    </div>)}

                {data.headline && (
                    <h3 data-tina-field={tinaField(data, "headline")}
                        className={`mb-10 text-2xl pt-10 pb-0 font-extrabold tracking-normal leading-tight title-font text-center`}>
                        <span
                            className={`bg-clip-text text-transparent bg-gradient-to-r   ${data.color === "primary"
                                    ? `from-white to-gray-100`
                                    : headlineColorClasses[theme.color]
                                }`} >
                            {data.headline}
                        </span>
                    </h3>
                )}  
                </Container>
        </Section>
    );
};

export const navBlockSchema: TinaTemplate = {
    name: "nav",
    label: "Nav",
    ui: {
        previewSrc: "/blocks/nav.png",
        defaultItem: {
            headline: "This Big Text is Totally Awesome",
        },
    },
    fields: [
        {
            type: "string",
            label: "Headline",
            name: "headline",
        },
        {
            label: "Actions",
            name: "actions",
            type: "object",
            list: true,
            ui: {
                defaultItem: {
                    label: "Action Label",
                    type: "button",
                    icon: true,
                    link: "/",
                },
                itemProps: (item: any) => ({ label: item.label }),
            },
            fields: [
                {
                    label: "Label",
                    name: "label",
                    type: "string",
                },
                {
                    label: "Type",
                    name: "type",
                    type: "string",
                    options: [
                        { label: "Button", value: "button" },
                        { label: "Link", value: "link" },
                    ],
                },
                {
                    label: "Icon",
                    name: "icon",
                    type: "boolean",
                },
                {
                    label: "Link",
                    name: "link",
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