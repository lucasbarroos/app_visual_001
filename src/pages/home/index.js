import React from 'react';
import {StatusBar, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  FirstPart,
  PageTitle,
  PageBell,
  PriceText,
  DescriptionText,
  ButtonForm,
  BuyButton,
  SellButton,
  BuyButtonContent,
  SellButtonContent,
  VerticalList,
  VerticalListItem,
  VerticalListLabel,
  SecondPart,
  TransactionForm,
  TransactionCard,
  TransactionIcon,
  TransactionValueForm,
  TransactionValue,
  TransactionPercentage,
  TransactionValue2,
  TransactionPercentage2,
  TransactionGraph,
} from './styles';

const scrollStyle = {
  marginTop: -60,
  marginBottom: 80,
};

export default function Home() {
  Icon.loadFont();
  const [data] = React.useState([
    {
      id: 0,
      title: '',
      icon: <Icon name="star-outline" size={24} />,
    },
    {id: 1, title: 'Cryptocurrency', selected: true},
    {id: 2, title: 'Forks'},
    {id: 3, title: 'Tokens'},
    {id: 4, title: 'Dollars'},
    {id: 5, title: 'Pounds'},
  ]);

  const [transactions] = React.useState([
    {
      id: 0,
      icon: <Icon name="bitcoin" size={24} color="orange" />,
      value: '$3.458',
      percent: -0.43,
      final_value: '$8087.6',
      final_percent: 5.58,
      graph: 'https://imgur.com/J2xK6Sk.png',
    },
    {
      id: 1,
      value: '$2.742',
      icon: <Icon name="ethereum" size={24} color="black" />,
      percent: 5.85,
      final_value: '$0.6006',
      final_percent: -3.91,
      graph: 'https://imgur.com/J2xK6Sk.png',
    },
    {
      id: 3,
      value: '$5.742',
      icon: <Icon name="ethereum" size={24} color="black" />,
      percent: 2.85,
      final_value: '$0.6006',
      final_percent: -1.91,
      graph: 'https://imgur.com/J2xK6Sk.png',
    },
  ]);

  return (
    <Container>
      <FirstPart>
        <StatusBar backgroundColor="#4a53bd" />
        <PageTitle>Total Balance</PageTitle>
        <PageBell>
          <Icon name="bell-outline" size={24} color="#fff" />
        </PageBell>
        <PriceText>
          $ 23 254 <Icon name="chevron-down" size={24} color="#fff" />
        </PriceText>
        <DescriptionText>+ $233.73 today</DescriptionText>
        <ButtonForm>
          <BuyButton>
            <BuyButtonContent>Buy</BuyButtonContent>
          </BuyButton>
          <SellButton>
            <SellButtonContent>Sell</SellButtonContent>
          </SellButton>
        </ButtonForm>
        <VerticalList>
          <FlatList
            horizontal={true}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <VerticalListItem>
                <VerticalListLabel selected={item.selected}>
                  {item.title ? item.title : item.icon}
                </VerticalListLabel>
              </VerticalListItem>
            )}
          />
        </VerticalList>
      </FirstPart>
      <SecondPart>
        <ScrollView style={scrollStyle}>
          <TransactionForm>
            {transactions.map(element => (
              <TransactionCard>
                <TransactionIcon>{element.icon}</TransactionIcon>
                <TransactionValueForm>
                  <TransactionValue>{element.value}</TransactionValue>
                  <TransactionPercentage value={element.percent}>
                    {element.percent}%
                  </TransactionPercentage>
                </TransactionValueForm>
                <TransactionGraph source={{uri: element.graph}} />
                <TransactionValueForm>
                  <TransactionValue2>{element.final_value}</TransactionValue2>
                  <TransactionPercentage2 value={element.final_percent}>
                    {element.final_percent}%
                  </TransactionPercentage2>
                </TransactionValueForm>
              </TransactionCard>
            ))}
          </TransactionForm>
        </ScrollView>
      </SecondPart>
    </Container>
  );
}
