import { useEffect, useMemo, useState } from 'react';

import { userRequest } from '../../utils/requests.utils';

import { Container, HomeWidgets } from './home.styles';

import Chart from '../../components/chart/chart.component';
import FeaturedInfo from '../../components/featured-info/featured-info.component';
import NewUserBlock from '../../components/new-users-block/new-users-block.compoent';
import TransactionsBlock from '../../components/transactions-block/transactions-block.component';

const Home = () => {
  const [userStats, setUserStats] = useState([]);


  const MONTHS = useMemo(() => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],[]);

  const getStats = async (months) => {
    try {
      const res = await userRequest.get('/users/stats');
      res.data.map((item) =>
        setUserStats((prev) => [
          ...prev,
          { name: months[item._id - 1], 'Active User': item.total },
        ])
      );
    } catch {}
  };



  useEffect(() => {
    getStats(MONTHS);
  }, [MONTHS]);

  return (
    <Container>
      

      <FeaturedInfo />
      <Chart
        data={userStats}
        title='Users Analytics'
        grid
        dataKey='Active User'
        />
      <HomeWidgets>
        <NewUserBlock />
        <TransactionsBlock />
      </HomeWidgets>
    </Container>
  );
};

export default Home;
