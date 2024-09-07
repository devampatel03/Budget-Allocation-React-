import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer,
  ReferenceArea
} from 'recharts';
import styled, { keyframes } from 'styled-components';

// Define blinking animation
const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

// Styled component for the blinking dot
const BlinkingDot = styled.circle`
  animation: ${blink} 1s infinite;
`;

// Sample data
const data = [
  { name: '01 Jan 2021', Total_Cholestrol: 200 },
  { name: '24 Jan', Total_Cholestrol: 190 },
  { name: '18 Jan', Total_Cholestrol: 146 },
  { name: '23 Jul', Total_Cholestrol: 187 },
  { name: '03 Aug', Total_Cholestrol: 376 },
  { name: '25 Nov', Total_Cholestrol: 92 },
  { name: '10 Jan 2022', Total_Cholestrol: 198 },
  { name: '06 Feb', Total_Cholestrol: 204 },
  { name: '30 Jul', Total_Cholestrol: 134 },
  { name: '31 Dec', Total_Cholestrol: 212 },
  { name: '21 Mar 2023', Total_Cholestrol: 260 },
  { name: '26 Apr', Total_Cholestrol: 97 }
];

export default class Graph_gen extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: '#E8F1F2', padding: '20px' }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="gray" strokeOpacity={0.3} />
            <XAxis dataKey="name" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip contentStyle={{ backgroundColor: '#2b5480', color: 'white', borderRadius: '5px' }} />
            <Legend />
            {/* Reference Areas with rounded edges */}
            <ReferenceArea x1="24 Jan" x2="18 Jan" y1={0} y2={20} fill="#A3D8F4" fillOpacity={0.7} />
            <ReferenceArea x1="23 Jul" x2="10 Jan 2022" y1={0} y2={20} fill="#92D050" fillOpacity={0.7} />
            <ReferenceArea x1="10 Jan 2022" x2="26 Apr" y1={0} y2={20} fill="#F4A3A3" fillOpacity={0.7} />
            <ReferenceArea x1="01 Jan 2021" x2="26 Apr" y1={200} y2={380} fill="#FFC1C1" fillOpacity={0.5} />
            
            <Line type="monotone" dataKey="Total_Cholestrol" stroke="#2b5480" activeDot={{ r: 5 }} strokeWidth={3} />
            {data.map((entry, index) => (
              index === data.length - 1 && <BlinkingDot cx={entry.cx} cy={entry.cy} r={5} fill="#FF0000" />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
