import { gql } from "@urql/next";

export const CreateIssueMutation = gql`
  mutation CreateIssue($input: CreateIssueInput!) {
    createIssue(input: $input) {
      createdAt
      id
      name
      status
    }
  }
`