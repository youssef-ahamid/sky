import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });

export async function getProjectPreviews() {
  if(!graphcms) graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });
  const { projects } = await graphcms.request(`
    {
      projects {
        slug
        title
        description
        image {
          url
        }
        type
        clients {
          logo {
            url
          }
        }
        services {
          shortTitle
        }
      }
    }
  `);
  return projects;
}

export async function getClients() {
  if(!graphcms) graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });
  const { clients } = await graphcms.request(`
    {
      clients(where: {logo: {}}) {
        logo {
          url(transformation: {document: {output: {format: png}}})
        }
        name
      }
    }
  `);
  return clients;
}

export async function getServices() {
  if(!graphcms) graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });
  const { services } = await graphcms.request(`
    {
      services {
        title
        type
        shortTitle
        image {
          url
        }
        description
      }
    }
  `);
  return services;
}

export async function getFeaturedProjects() {
  if(!graphcms) graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });
  const { projects } = await graphcms.request(`
    {
      projects(where: {featured: true}) {
        slug
        title
        description
        image {
          url
        }
        clients {
          logo {
            url
          }
        }
        type
        services {
          shortTitle
        }
      }
    }
  `);
  return projects;
}

export async function getProject(slug) {
  if(!graphcms) graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });
  const { project } = await graphcms.request(`
    {
      project(where: {slug: "${slug}"}) {
        slug
        title
        description
        image {
          url
        }
        type
        images {
          url
        }
        clients {
          name
          logo {
            url(transformation: {document: {output: {format: png}}})
          }
        }
        owner
        location
        businessVolume
        scope { 
          html
        }
        services {
          title
          shortTitle
          type
          image {
            url
          }
        }
      }
    }
  `);
  return project;
}

export async function getPage(slug) {
  if(!graphcms) graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });
  const { page } = await graphcms.request(`
    {
      page(where: {slug: "${slug}"}) {
        seo {
          title
          descriptionText
          previewImage {
            url(transformation: {image: {resize: {height: 900, fit: clip, width: 1600}}})
          }
        }
        slug
        sections {
          identifier
          background {
            url
          }
          fullHeight
          preheader
          title
          description
          content {
            __typename
            ... on Button {
              icon
              label
              shape
              type
              url
            }
            ... on Employee {
              teamMember {
                name
                role
                image {
                  url
                }
              }
            }
            ... on WYSIWYG {
              text {
                html
              }
            }
            ... on Award {
              title
              image {
                url
              }
            }
            ... on Hero {
              description
              title
              image {
                url
              }
            }
            ... on TextInput {
              cta
              label
              placeholder
              validateOnChange
              validations
            }
            ... on Statistic {
              number
              title
            }
            ... on Step {
              title
              text
            }
            ... on Testimonial {
              text
              client {
                name
                role
                avatar {
                  url
                }
                logo {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  return page;
}

export async function getSection(id) {
  if(!graphcms) graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, { headers: {} });
  const { section } = await graphcms.request(`
    {
      section(where: {identifier: "${id}"}) {
        identifier
        background {
          url
        }
        fullHeight
        preheader
        title
        description
        content {
          __typename
          ... on Button {
            icon
            label
            shape
            type
            url
          }
          ... on Hero {
            description
            title
            image {
              url
            }
          }
          ... on TextInput {
            cta
            label
            placeholder
            validateOnChange
            validations
          }
          ... on Statistic {
            number
            title
          }
          ... on Step {
            title
            text
          }
          ... on Employee {
            teamMember {
              name
              role
              image {
                url
              }
            }
          }
          ... on WYSIWYG {
            text {
              html
            }
          }
          ... on Award {
            title
            image {
              url
            }
          }
          ... on Testimonial {
            text
            client {
              name
              role
              avatar {
                url
              }
              logo {
                url
              }
            }
          }
        }
      }
    }
  `);
  return section;
}
