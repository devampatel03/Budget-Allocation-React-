// // import React, { useContext } from 'react';

// // import FusionCharts from "fusioncharts";
// // import charts from "fusioncharts/fusioncharts.charts";
// // import ReactFusioncharts from "react-fusioncharts";

// // // Resolves charts dependancy
// // charts(FusionCharts);

// // const dataSource = {
// //   chart: {
// //     caption: "Support Tickets : Received vs Resolved",
// //     yaxisname: "# of Tickets",
// //     subcaption: "Last week",
// //     numdivlines: "3",
// //     showvalues: "0",
// //     legenditemfontsize: "15",
// //     legenditemfontbold: "1",
// //     plottooltext: "<b>$dataValue</b> Tickets $seriesName on $label",
// //     theme: "umber"
// //   },
// //   categories: [
// //     {
// //       category: [
// //         {
// //           label: "Jan 1"
// //         },
// //         {
// //           label: "Jan 2"
// //         },
// //         {
// //           label: "Jan 3"
// //         },
// //         {
// //           label: "Jan 4"
// //         },
// //         {
// //           label: "Jan 5"
// //         },
// //         {
// //           label: "Jan 6"
// //         },
// //         {
// //           label: "Jan 7"
// //         }
// //       ]
// //     }
// //   ],
// //   dataset: [
// //     {
// //       seriesname: "Received",
// //       data: [
// //         {
// //           value: "55"
// //         },
// //         {
// //           value: "45"
// //         },
// //         {
// //           value: "52"
// //         },
// //         {
// //           value: "29"
// //         },
// //         {
// //           value: "48"
// //         },
// //         {
// //           value: "28"
// //         },
// //         {
// //           value: "32"
// //         }
// //       ]
// //     },
// //     {
// //       seriesname: "Resolved",
// //       data: [
// //         {
// //           value: "50"
// //         },
// //         {
// //           value: "30"
// //         },
// //         {
// //           value: "49"
// //         },
// //         {
// //           value: "22"
// //         },
// //         {
// //           value: "43"
// //         },
// //         {
// //           value: "14"
// //         },
// //         {
// //           value: "31"
// //         }
// //       ]
// //     }
// //   ]
// // };

// // const MyComponent =()=> {
  
// //     return (
// //       <ReactFusioncharts
// //         type="msspline"
// //         width="100%"
// //         height="100%"
// //         dataFormat="JSON"
// //         dataSource={dataSource}
// //       />
// //     );
// //   }


// // export default MyComponent;




// import React, { useEffect, useRef } from 'react';
// import * as am5 from '@amcharts/amcharts5';
// import * as am5xy from '@amcharts/amcharts5/xy';
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

// const ChartComponent = () => {
//   const chartDivRef = useRef(null);

//   useEffect(() => {
//     let root = am5.Root.new(chartDivRef.current);

//     root.setThemes([am5themes_Animated.new(root)]);

//     let chart = root.container.children.push(
//       am5xy.XYChart.new(root, {
//         panX: true,
//         panY: true,
//         wheelX: 'panX',
//         wheelY: 'zoomX',
//         layout: root.verticalLayout,
//         pinchZoomX: true,
//         paddingLeft: 0,
//       })
//     );

//     let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {
//       behavior: 'none',
//     }));
//     cursor.lineY.set('visible', false);

//     let colorSet = am5.ColorSet.new(root, {});

//     let data = [
//       { year: '2014', value: 23.5, bulletSettings: { fill: colorSet.getIndex(0) } },
//       { year: '2015', value: 26, bulletSettings: { fill: colorSet.getIndex(0) } },
//       { year: '2016', value: 30, bulletSettings: { fill: colorSet.getIndex(0) } },
//       { year: '2017', value: 20, bulletSettings: { fill: colorSet.getIndex(0) } },
//       { year: '2018', value: 30, bulletSettings: { fill: colorSet.getIndex(3) } },
//       { year: '2019', value: 30, bulletSettings: { fill: colorSet.getIndex(3) } },
//       { year: '2020', value: 31, bulletSettings: { fill: colorSet.getIndex(3) } },
//       { year: '2021', value: 34, bulletSettings: { fill: colorSet.getIndex(6) } },
//       { year: '2022', value: 33, bulletSettings: { fill: colorSet.getIndex(6) } },
//       { year: '2023', value: 34, bulletSettings: { fill: colorSet.getIndex(6) } },
//       { year: '2024', value: 36, bulletSettings: { fill: colorSet.getIndex(6) } },
//     ];

//     let xRenderer = am5xy.AxisRendererX.new(root, {
//       minorGridEnabled: true,
//       minGridDistance: 80,
//     });
//     xRenderer.grid.template.set('location', 0.5);
//     xRenderer.labels.template.setAll({
//       location: 0.5,
//       multiLocation: 0.5,
//     });

//     let xAxis = chart.xAxes.push(
//       am5xy.CategoryAxis.new(root, {
//         categoryField: 'year',
//         renderer: xRenderer,
//         tooltip: am5.Tooltip.new(root, {}),
//       })
//     );

//     xAxis.data.setAll(data);

//     let yAxis = chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         maxPrecision: 0,
//         renderer: am5xy.AxisRendererY.new(root, {}),
//       })
//     );

//     let series = chart.series.push(
//       am5xy.LineSeries.new(root, {
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: 'value',
//         categoryXField: 'year',
//         tooltip: am5.Tooltip.new(root, {
//           labelText: '{valueY}',
//           dy: -5,
//         }),
//       })
//     );

//     series.strokes.template.setAll({
//       templateField: 'strokeSettings',
//       strokeWidth: 2,
//     });

//     series.fills.template.setAll({
//       visible: true,
//       fillOpacity: 0.5,
//       templateField: 'fillSettings',
//     });

//     series.bullets.push(() => {
//       return am5.Bullet.new(root, {
//         sprite: am5.Circle.new(root, {
//           templateField: 'bulletSettings',
//           radius: 5,
//         }),
//       });
//     });

//     series.data.setAll(data);
//     series.appear(1000);

//     chart.set(
//       'scrollbarX',
//       am5.Scrollbar.new(root, {
//         orientation: 'horizontal',
//         marginBottom: 20,
//       })
//     );

//     chart.appear(1000, 100);

//     return () => {
//       root.dispose();
//     };
//   }, []);

//   return <div id="chartdiv" ref={chartDivRef} style={{ width: '100%', height: '500px' }} />;
// };

// export default ChartComponent;



                                                                 // customized code for the multi-parameter graph


// import React, { PureComponent } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Label,
//   Legend,
//   ResponsiveContainer,
//   ReferenceArea,
//   ReferenceLine
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

//   calculateY2(x1, x2) {
//     const point1 = data.find(d => d.name === x1);
//     const point2 = data.find(d => d.name === x2);
//     if (point1 && point2) {
//       return Math.max(point1.pv, point2.pv);
//     }
//     return 0;
//   }

//   getPVValue(name) {
//     const point = data.find(d => d.name === name);
//     return point ? point.pv : 0;
//   }
//   // #fff1e5
//   render() {
//     return (
//       <div style={{ backgroundColor: '#F2B47E', padding: '20px' }}>
//         <ResponsiveContainer width="100%" height={400}>
//           <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="9 9" stroke="black" strokeOpacity={0.3} />
//             <XAxis dataKey="name" stroke="black" />
//             <YAxis stroke="black" />
//             <Tooltip contentStyle={{ backgroundColor: 'white'}} />
//             <Legend />

//             {/* Reference Areas for Shading */}
//             <ReferenceArea x1="Page A" x2="Page C" y1={0} y2={500} fill="#04ADBF" fillOpacity={1}>
//   <Label value="Set-1" position="center" fill='white' fontSize={15} />
// </ReferenceArea>
//             <ReferenceArea x1="Page C" x2="Page F" y1={0} y2={500} fill="#03402F" fillOpacity={1} >
//             <Label value="Set-1" position="center" fill='white' fontSize={15} />
// </ReferenceArea>
//             <ReferenceArea x1="Page F" x2="Page G" y1={0} y2={500} fill="#BC04BF" fillOpacity={1} >
//             <Label value="Set-1" position="center" fill='white' fontSize={15} />
// </ReferenceArea>
//             <ReferenceArea x1="Page A" x2="Page G" y1={7500} y2={10000} fill="#D90718" fillOpacity={0.7} />
//             <ReferenceArea x1="Page A" x2="Page G" y1={500} y2={2500} fill="#D90718" fillOpacity={0.7} />

//             {/* Reference Line for Y value 7500 */}
//             {/* <ReferenceLine y={7500} stroke="red" strokeDasharray="3 3" /> */}

//             <Line type="monotone" dataKey="pv" stroke="#2b5480" activeDot={{ r: 8 }} strokeWidth={4} />
//             <Line type="monotone" dataKey="uv" stroke="#72A603" strokeWidth={4}/>
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }
// }









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
  ReferenceArea,
  ReferenceLine
} from 'recharts';

// 
const data = [
  {
    name:'01 Jan 2021',
    Total_Cholestrol: 200,

  },
  {
    name:'24 Jan',
    Total_Cholestrol: 190,

  },
  // {
  //   name:'03 Jan 2021',
  //   Total_Cholestrol: 80,

  // },
  {
    name:'18 Jan',
    Total_Cholestrol: 146,

  },
  // {
  //   name:'13 Mar',
  //   Tota_Cholestrol: 34,

  // },
  {
    name:'23 Jul',
    Total_Cholestrol: 187,

  },
  {
    name:'03 Aug',
    Total_Cholestrol: 376,

  },
  // {
  //   name:'08 Jan 2021',
  //   Total_Cholestrol: 103,

  // },
  {
    name:'25 Nov',
    Total_Cholestrol: 92,

  },
  {
    name:'10 Jan 2022',
    Total_Cholestrol: 198,

  },
  {
    name:'06 Feb',
    Total_Cholestrol: 204,

  },
  {
    name:'30 Jul',
    Total_Cholestrol: 134,

  },
  {
    name:'31 Dec',
    Total_Cholestrol: 212,

  },
  {
    name:'21 Mar 2023',
    Total_Cholestrol: 260,

  },
  {
    name:'26 Apr',
    Total_Cholestrol: 97,

  }]

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  calculateY2(x1, x2) {
    const point1 = data.find(d => d.name === x1);
    const point2 = data.find(d => d.name === x2);
    if (point1 && point2) {
      return Math.max(point1.Total_Cholestrol, point2.Total_Cholestrol);
    }
    return 0;
  }

  getPVValue(name) {
    const point = data.find(d => d.name === name);
    return point ? point.Tota_Cholestrol : 0;
  }
  // #fff1e5
  render() {
    return (
      <div style={{ backgroundColor: '#F2B47E', padding: '20px' }}>
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
            <CartesianGrid strokeDasharray="9 9" stroke="black" strokeOpacity={0.3} />
            <XAxis dataKey="name" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip contentStyle={{ backgroundColor: 'black', opacity:0.9 ,color:'white'}} />
            <Legend />

            {/* Reference Areas for Shading */}
            <ReferenceArea x1="24 Jan" x2="18 Jan" y1={0} y2={20} fill="#04ADBF" fillOpacity={1}>
  <Label value="Set-1" position="center" fill='white' fontSize={15} />
</ReferenceArea>
            <ReferenceArea x1="23 Jul" x2="10 Jan 2022" y1={0} y2={20} fill="#03402F" fillOpacity={1} >
            <Label value="Set-2" position="center" fill='white' fontSize={15} />
</ReferenceArea>
            <ReferenceArea x1="10 Jan 2022" x2="26 Apr" y1={0} y2={20} fill="#BC04BF" fillOpacity={1} >
            <Label value="Set-3" position="center" fill='white' fontSize={15} />
</ReferenceArea>
            <ReferenceArea x1="01 Jan 2021" x2="26 Apr" y1={200} y2={380} fill="#D90718" fillOpacity={0.7} />
            {/* <ReferenceArea x1="01 Jan 2021" x2="26 Apr" y1={500} y2={2500} fill="#D90718" fillOpacity={0.7} /> */}

            {/* Reference Line for Y value 7500 */}
            {/* <ReferenceLine y={7500} stroke="red" strokeDasharray="3 3" /> */}

            <Line type="monotone" dataKey="Total_Cholestrol" stroke="#2b5480" activeDot={{ r: 2 }} strokeWidth={4} opacity={1}/>
            {/* <Line type="monotone" dataKey="uv" stroke="#72A603" strokeWidth={4}/> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
