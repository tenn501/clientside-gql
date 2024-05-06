import { gql } from "@urql/next";


export const EditIssueMutation = gql`
  mutation EditIssue($input: EditIssueInput!) {
    editIssue(input: $input) {
      createdAt
      id
      name
      status
    }
  }
`