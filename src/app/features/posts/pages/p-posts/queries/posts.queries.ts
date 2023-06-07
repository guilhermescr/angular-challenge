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

const POST_POST = gql`
  mutation ($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      username
      email
    }
  }
`;

const PUT_POST = gql`
  mutation ($input: UpdateUserInput!, $userId: ID!) {
    updateUser(input: $input, userId: $userId) {
      name
      username
      email
    }
  }
`;

const DELETE_POST = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id)
  }
`;

export { GET_POSTS, POST_POST, PUT_POST, DELETE_POST };
