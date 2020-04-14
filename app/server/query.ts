// import gql from 'graphql-tag';

export default `
query {
  user(login: "noook") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name
          url
          description
          stargazers {
            totalCount
          }
          primaryLanguage {
            name
            color
          }
          languages(first: 10) {
            totalSize
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
}
`;
