import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Dec 20 2019",
    percentage: 2.5,
  },
  {
    name: "May 14 2020",
    percentage: 4,
  },
  {
    name: "Sep 17 2020",
    percentage: 2.5,
  },
  {
    name: "Jan 14 2021",
    percentage: 5,
  },
  {
    name: "May 13 2021",
    percentage: 3,
  },
  {
    name: "Sep 16 2021",
    percentage: 5,
  },
  {
    name: "Jan 13 2022",
    percentage: 4,
  },

];

const Chart = ({handleMouseMoveInChart}) => {

  const handleMouseMove = (e) => {
    if (e.isTooltipActive) {
      let tempPercent = e.activePayload[0].payload.percentage;
      let tempName = e.activePayload[0].payload.name;
      handleMouseMoveInChart(tempName, tempPercent);
    }
  }
  
  return (
      <div style={{height: "250px", width: '900px', margin: "30px 0px"}}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            onMouseMove={handleMouseMove}
          >
            <CartesianGrid strokeDasharray="4 1" vertical={false} />
            <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />

            <YAxis      
              tickFormatter={tick => `${tick}%` }
              orientation='right' 
              domain={[2, 10]} 
              axisLine={false} 
              tickLine={false} 
            />
            <Tooltip wrapperStyle={{display: "none"}} />
            <Area type="monotone" dataKey="percentage" stroke="#DD6666" fill="#BBBBBB" />

          </AreaChart>
        </ResponsiveContainer>
      </div>
  );
}


export default Chart;