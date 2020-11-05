import { gql } from '@apollo/client';

export default null;

export const REGISTER_PLACE = gql`
  mutation RegisterPlace($name: String!, $link: String!, $location: LocationInput!, $influencerId: String!) {
    registerPlace(name: $name, link: $link, location: $location, influencerId: $influencerId) {
      ok
      message
    }
  }
`;
