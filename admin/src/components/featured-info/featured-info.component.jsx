import { useEffect, useState } from 'react';
import { userRequest } from '../../utils/requests.utils';

import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedTitle,
  FeaturedMoneyContainer,
  FeaturedMoney,
  FeaturedMoneyRate,
  FeaturedSub,
  ArrowIconDown,
  ArrowIconUp
} from './featured-info.styled';

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const getIncome = async () => {
    try {
      const res = await userRequest.get('orders/income');
      setIncome(res.data);
      setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
    } catch {}
  };

  useEffect(() => {
    getIncome();
  }, []);

  return (
    <FeaturedContainer>
      <FeaturedItem>
        <FeaturedTitle>Revanue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>${income[1]?.total}</FeaturedMoney>
          <FeaturedMoneyRate>
            %{Math.floor(percentage)}{' '}
            {percentage < 0 ? (
              <ArrowIconDown/>
            ) : (
              <ArrowIconUp/>
            )}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4 <ArrowIconDown/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,225</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4 <ArrowIconUp/>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </FeaturedContainer>
  );
};

export default FeaturedInfo;
