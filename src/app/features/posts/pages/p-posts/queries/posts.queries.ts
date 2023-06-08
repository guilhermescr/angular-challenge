import gql from 'graphql-tag';

const GET_POSTS = (limit: number) => {
  return gql`
    query {
      posts(options: { paginate: { limit: ${limit} } }) {
        data {
          id
          user {
            username
          }
          title
          body
        }
      }
    }
  `;
};

const GET_POST = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      user {
        username
      }
      title
      body
    }
  }
`;

const POST_POST = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const PUT_POST = gql`
  mutation ($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      user {
        username
      }
      title
      body
    }
  }
`;

const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

export { GET_POSTS, GET_POST, POST_POST, PUT_POST, DELETE_POST };
