import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

import { expenseData} from "./expenseData";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  WeekDay,
  BlackLine,
  MakeBar,
  WeekName
} from "./styles";

export default function BarChart() {
  return (
    <Container>
      <MainContainer>
        {expenseData.map(({ height, colors }, i) => {
          return (
            <BarChartContainer key={i}>
              <Number color={colors[1]}>${height}</Number>
              <MakeBar height={height * 2} colors={colors} />
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine />
      <WeekName>
        {expenseData.map(({ colors, day }, i) => {
          return (
            <BarChartContainer key={i}>
              <WeekDay color={colors[0]}>{day}</WeekDay>
            </BarChartContainer>
          );
        })}
      </WeekName>
    </Container>
  );
}

