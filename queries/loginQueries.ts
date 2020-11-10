import { gql } from '@apollo/client';

export default null;

export const LOGIN = gql`
  mutation Login($accessToken: String!, $platform: LoginPlatform!) {
    login(accessToken: $accessToken, platform: $platform) {
      ok
      message
      token
      code
    }
  }
`;
