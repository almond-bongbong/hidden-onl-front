import { gql } from '@apollo/client';

export const GET_INFLUENCERS = gql`
  query {
    getInfluencers {
      id
      platform
      name
      homepage
      thumbnail {
        url
        originalName
      }
    }
  }
`;
