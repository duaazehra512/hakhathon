import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    // {
    //   name : "slug",
    //   type : "slug",
    //   title : "slug",
    //   options : {
    //     source : "products"
    //   }

    // },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        slugify: input => input
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-") // Convert spaces to hyphens
          .replace(/[^\w\-]+/g, "") // Remove special characters
          .slice(0, 200) // Limit slug length
      },
      validation: Rule => Rule.required()
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});