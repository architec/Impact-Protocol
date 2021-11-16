import { Row, Typography } from 'antd';
import React from 'react';
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    days: 30,
    futureValue: 1504,
  },
  {
    days: 60,
    futureValue: 2262,
  },
  {
    days: 90,
    futureValue: 3403,
  },
  {
    days: 180,
    futureValue: 11580,
  },
  {
    days: 360,
    futureValue: 134091,
  },
];

export default function InitiativessChart({ route, chartData = data }) {
  const { Text, Title } = Typography;

  return (
    <Row style={styles.row}>
      <Title level={3} type="secondary" style={{ textAlign: 'left' }}>
        Estimated Yield
      </Title>

      <div style={{ textAlign: 'left', marginBottom: 20 }}>
        <Text underline strong>
          3.00 ETH
        </Text>{' '}
        generates{' '}
        <Text strong underline>
          1,270,488 CDAO
        </Text>{' '}
        after{' '}
        <Text strong underline>
          90 days
        </Text>
      </div>

      <ResponsiveContainer width="100%" height={475}>
        <LineChart
          width="100%"
          height="100%"
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="days">
            <Label value="Days" offset={-8} position="bottom" />
          </XAxis>
          <YAxis dataKey="futureValue">
            <Label angle={-90} offset={-5} position="insideLeft" value="Future Value (Amount of CDAOs)" />
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="futureValue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Row>
  );
}

const styles = {
  row: {
    display: 'block',
    padding: '1em 1.5em',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px 0 rgba(0, 0, 0, 0.25)',
  },
};
