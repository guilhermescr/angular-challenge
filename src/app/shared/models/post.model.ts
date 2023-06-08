export interface Post {
  body: string;
  id: string;
  title: string;
  user: { __typename?: string; username: string };
  __typename?: string;
}
