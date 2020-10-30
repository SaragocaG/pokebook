import React from 'react';
import { TypeStats } from '../../../types/types';
import {
  BarChart, CartesianGrid, XAxis,YAxis, Tooltip, Bar, ResponsiveContainer,
} from 'recharts';

interface ComponentProps {
  stats: TypeStats[];
}

const Stats = ({ stats }: ComponentProps) => {
  const chartData = stats.map((stat) => ({
    base_stat: stat.base_stat,
    effort: stat.effort,
    name: stat.stat.name.replace('-', ' '),
  }));

  return (
    <div>
      <div className="row hcenter">
        <span>
          Comparativo <b>característica X Esforço</b>
        </span>
      </div>
      <>
        <ResponsiveContainer width="100%" height={300} >
          <BarChart layout="horizontal" data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip active />
            <Bar name="Nível" dataKey="base_stat" fill="#8884d8" />
            <Bar name="Esforço" dataKey="effort" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </>
    </div>
  );
};

export default Stats;
