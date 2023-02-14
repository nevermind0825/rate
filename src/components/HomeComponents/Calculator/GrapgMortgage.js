import React ,{PureComponent} from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const GrapgMortgage = ({graphData=[],graphColors=[]}) => {

    const onPieEnter =() =>{}

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={800} height={400} onMouseEnter={onPieEnter} >
                <Pie
                    data={graphData}
                    // cx={120}
                    cx={160}
                    cy={150}
                    // innerRadius={40}
                    // outerRadius={80}
                    innerRadius={50}
                    outerRadius={140}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                {graphData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={graphColors[index % graphColors.length]} />
                ))}
            </Pie>
        </PieChart>
        </ResponsiveContainer>
    );
};

export default GrapgMortgage;