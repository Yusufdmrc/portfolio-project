import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: { asset: { _ref: string; _type: string } } | undefined) => 
  source ? builder.image(source) : null;

// GROQ queries
export const groqQueries = {
  // Blog posts
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    categories[]-> {
      _id,
      title
    }
  }`,

  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body,
    categories[]-> {
      _id,
      title
    }
  }`,

  // Projects
  allProjects: `*[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    technologies[],
    githubUrl,
    liveUrl,
    featured
  }`,

  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image,
    images[],
    technologies[],
    githubUrl,
    liveUrl,
    content
  }`,
};
