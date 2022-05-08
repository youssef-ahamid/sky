import { GraphQLClient, gql } from 'graphql-request'

export const graphcms = new GraphQLClient(
  import.meta.env.VITE_GRAPHCMS_URL
)

export async function getProjectPreviews() {
  const query = gql`
    {
      projects {
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
        services {
          shortTitle
        }
      }
    }
  `
  const { projects } = await graphcms.request(query)
  return projects
}

export async function getServices() {
  const query = gql`
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
  `
  const { projects } = await graphcms.request(query)
  return projects
}

export async function getFeaturedProjects() {
  const query = gql`
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
        services {
          shortTitle
        }
      }
    }
  `
  const { projects } = await graphcms.request(query)
  return projects
}

export async function getProject(slug) {
  const query = gql`
    {
      project(where: {slug: ${slug}}) {
        slug
        title
        description
        clients {
          name
          logo {
            url(transformation: {document: {output: {format: png}}})
          }
        }
        owner
        location
        businessVolume
        scope
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
  `
  const { projects } = await graphcms.request(query)
  return projects
}

export async function getPage(slug) {
  const query = gql`
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
          background {
            url
          }
          statistic {
            title
            number
          }
          button {
            type
            shape
            label
            icon
          }
          fullHeight
          hero {
            title
            description
            image {
              url
            }
          }
        }
      }
    }
  `
  const { page } = await graphcms.request(query)
  return page
}

