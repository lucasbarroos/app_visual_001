import styled from 'styled-components';

export const Container = styled.View`
  position: relative;
  height: 100%;
`;

export const FirstPart = styled.View`
  position: relative;
  height: 60%;
  background-color: #4a53bd;
  padding: 15px;
`;

export const PageTitle = styled.Text`
  color: white;
  font-size: 18px;
  width: 50%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const PageBell = styled.View`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const PriceText = styled.Text`
  color: white;
  font-size: 48px;
`;

export const DescriptionText = styled.Text`
  color: #84a1d6;
  font-size: 20px;
`;

export const ButtonForm = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 30px 10px 20px 0px;
`;

export const BuyButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 120px;
  background-color: white;
  border-radius: 30px;
  margin-right: 10px;
`;

export const SellButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 120px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid white;
  border-radius: 30px;
`;

export const BuyButtonContent = styled.Text`
  color: #4a53bd;
  font-size: 16px;
  font-weight: bold;
`;

export const SellButtonContent = styled.Text`
  color: white;
  font-weight: bold;
`;

export const VerticalList = styled.View`
  position: absolute;
  margin-right: -35px;
  margin-left: 20px;
  bottom: 80px;
  left: 0px;
`;

export const VerticalListItem = styled.TouchableOpacity`
  margin: 10px 20px 10px 10px;
`;

export const VerticalListLabel = styled.Text`
  font-size: 18px;
  color: ${props => (props.selected ? 'white' : 'rgba(255, 255, 255, 0.6)')};
  font-weight: bold;
  scroll-
`;

export const SecondPart = styled.View`
  position: relative;
  height: 50%;
  background-color: #efedf1;
`;

export const TransactionForm = styled.View`
  position: relative;
`;

export const TransactionCard = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 120px;
  width: 94%;
  z-index: 1000;
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: white;
`;

export const TransactionIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 50px;
  width: 50px;
  background-color: #eee;
  border-radius: 25px;
`;

export const TransactionValueForm = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px 10px 0px 10px;
`;

export const TransactionValue = styled.Text`
  font-size: 20px;
`;

export const TransactionValue2 = styled.Text`
  font-size: 20px;
`;

export const TransactionPercentage = styled.Text`
  color: ${props => (props.value >= 0 ? 'green' : 'rgba(255, 0, 0, 0.6)')};
`;

export const TransactionPercentage2 = styled.Text`
  color: ${props => (props.value >= 0 ? 'green' : 'rgba(255, 0, 0, 0.6)')};
`;

export const TransactionGraph = styled.Image`
  margin: 0px 20px 0px 20px;
  height: 40px;
  width: 40px;
`;
