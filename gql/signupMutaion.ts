import { gql } from '@urql/next'

export const SignupMutation = gql`

  mutation Mutation($input: AuthInput!) {
    signin(input: $input) {
      token
      id
    }
  }
`