import { gql } from '@apollo/client';

export default null;

export const REGISTER_PLACE = gql`
  mutation RegisterPlace($name: String!, $location: LocationInput!, $influencerId: String!) {
    registerPlace(name: $name, location: $location, influencerId: $influencerId) {
      ok
      message
    }
  }
`;
