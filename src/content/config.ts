import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((img) => img.width < 1200, { message: "Image should be lower 1200px"}),
      author: z.string(),
      tags: z.array(z.string()) 
    })
})

// El nombre de la clave tiene que ser el mismo que el de la carpeta en content
export const collections = { blog: blogCollection }