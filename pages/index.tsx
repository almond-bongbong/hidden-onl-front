import { ReactElement } from 'react';
import { useQuery } from '@apollo/react-hooks';
import MainMap from '../components/MainMap/MainMap';
import { GET_INFLUENCERS } from '../queries/influencerQueries';
import { Query } from '../types/api';

function IndexPage(): ReactElement {
  const { data } = useQuery<Query>(GET_INFLUENCERS);
  console.log(data?.getInfluencers);

  return (
    <div>
      <MainMap />
    </div>
  );
}

export default IndexPage;
