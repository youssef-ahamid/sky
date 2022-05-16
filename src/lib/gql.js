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
  `
  const { projects } = await graphcms.request(query)
  return projects
}

export async function getClients() {
  const query = gql`
    {
      clients(where: {logo: {}}) {
        logo {
          url(transformation: {document: {output: {format: png}}})
        }
        name
      }
    }
  `
  const { clients } = await graphcms.request(query)
  return clients
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
  const { services } = await graphcms.request(query)
  return services
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
        type
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
  `
  const { project } = await graphcms.request(query)
  return project
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
  `
  const { page } = await graphcms.request(query)
  return page
}

export async function getSection(id) {
  const query = gql`
    {
      section(where: {identifier: "${id}"}) {
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
  `
  const { section } = await graphcms.request(query)
  return section
}

