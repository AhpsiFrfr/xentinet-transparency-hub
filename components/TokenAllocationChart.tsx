
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { TokenAllocationData } from '../types';

interface TokenAllocationChartProps {
  data: TokenAllocationData[];
}

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900/80 border border-blue-500/30 p-2 rounded-md shadow-lg backdrop-blur-sm">
          <p className="text-white font-bold">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

const TokenAllocationChart: React.FC<TokenAllocationChartProps> = ({ data }) => {
  return (
    <PieChart width={400} height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        innerRadius={60}
        fill="#8884d8"
        dataKey="value"
        paddingAngle={5}
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}/>
    </PieChart>
  );
};

export default TokenAllocationChart;
