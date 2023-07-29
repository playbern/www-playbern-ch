


export const galleryBlockSchema = {
    name:"gallery",
    label: "Gallery",
    ui: {
        previewSrc: "/blocks/features.png",
        defaultItem: {
            title: "This is The Gallery Title",
        },
    },
    fields:[
        {
            type: "string",
            label: "title",
            name: "title",
        },
        {
            type: "object",
            label: "Image",
            name: "image",
            list: true,
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