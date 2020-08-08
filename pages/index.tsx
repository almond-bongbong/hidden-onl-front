import { ReactElement } from 'react';
import { useQuery } from '@apollo/react-hooks';
import MainMap from '../components/MainMap/MainMap';
import { GET_INFLUENCERS } from '../queries/influencerQueries';

function IndexPage(): ReactElement {
  const result = useQuery(GET_INFLUENCERS);
  console.log(result.data);

  return (
    <div>
      <MainMap />
    </div>
  );
}

export default IndexPage;
