import React from 'react'
import { li, li_div, container, li_selected, table } from "./vision_rate.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = {
    "news": [
        {
            name: 'Jan 22',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Mar 22',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'May 22',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Jul 22',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Sep 22',
            uv: 2393,
            pv: 3833,
            amt: 2533,
        }
    ],
    "mba":[
        {
            name: 'Jan 22',
            uv: 2893,
            pv: 4333,
            amt: 2131,
        },
        {
            name: 'Mar 22',
            uv: 1393,
            pv: 3333,
            amt: 2533,
        },
        {
            name: 'May 22',
            uv: 790,
            pv: 3333,
            amt: 2500,
        },
        {
            name: 'Jul 22',
            uv: 390,
            pv: 3300,
            amt: 2500,
        }
    ],
    "fred":[
        {
            name: 'Jan 22',
            uv: 370,
            pv: 3120,
            amt: 2511,
        },
        {
            name: 'Mar 22',
            uv: 1071,
            pv: 3121,
            amt: 2511,
        },
        {
            name: 'May 22',
            uv: 871,
            pv: 3121,
            amt: 2500,
        }
    ]
};

const chartData = [
    { year: "15 Yr. Fixed", rate: "1.7", change: "-0.06", points: "0.00" },
    { year: "25 Yr. Fixed", rate: "12", change: "-2.06", points: "0.00" },
    { year: "11 Yr. Fixed", rate: "3.2", change: "-1.06", points: "0.00" },
    { year: "19 Yr. Fixed", rate: "17.2", change: "6.0", points: "0.00" },
    { year: "14 Yr. Fixed", rate: "1.1", change: "-1.06", points: "0.00" },
    { year: "16 Yr. Fixed", rate: "10.6", change: "8.06", points: "0.00" },
  ]

const GraphComponent = () => {

    const [tab, setTab] = React.useState("news");

    return (
        <div className={container}>
            <h3>Average Mortgage Rates</h3>
            <div className={li_div}>
                <li onClick={() => setTab("news")} className={tab == "news" ? li : `${li} ${li_selected}`}>Mortgage News</li>
                <li onClick={() => setTab("mba")} className={tab == "mba" ? li : `${li} ${li_selected}`}>MBA</li>
                <li onClick={() => setTab("fred")} className={tab == "fred" ? li : `${li} ${li_selected}`}>Freddie Mac</li>
            </div>
            <ResponsiveContainer width="90%" height="40%">
                <AreaChart
                    width={600}
                    height={400}
                    data={data[tab]}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
                
            <div className={table}>
            <table>
              <tr >
                <th style={{paddingRight:"2rem", textAlign:"center"}}>Years</th>
                <th style={{paddingRight:"2rem", textAlign:"center"}}>Rate</th>
                <th style={{paddingRight:"2rem", textAlign:"center"}}>Change</th>
                <th style={{paddingRight:"2rem", textAlign:"center"}}>Points</th>
              </tr>
              {chartData.map((val, key) => {
                return (
                  <tr  key={key}>
                    <td style={{paddingRight:"2rem", textAlign:"center"}}>{val.year}</td>
                    <td style={{paddingRight:"2rem", textAlign:"center"}}>{val.rate}</td>
                    <td style={{paddingRight:"2rem", textAlign:"center"}}>{val.change}</td>
                    <td style={{paddingRight:"2rem", textAlign:"center"}}>{val.points}</td>
                  </tr>
                )
              })}
            </table>
          </div>

        </div>
    )

}

export default GraphComponent
