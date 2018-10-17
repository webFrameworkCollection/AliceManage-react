import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../../actions";
import { mapstate } from "../../../reducers/index"
import { Row, Col,Calendar, Badge } from 'antd';
import Card from "./../../../components/card/card";
import style from "./index.less";
import { PieChart, Pie, Tooltip,Cell,
  AreaChart, Area, XAxis, YAxis, 
  BarChart, Bar, CartesianGrid, Legend} from 'recharts';

const data = [
  {name: '2018-10-1', google: 4000, wechat: 2400, baidu: 2400},
  {name: '2018-10-2', google: 3000, wechat: 1398, baidu: 2210},
  {name: '2018-10-3', google: 2000, wechat: 9800, baidu: 2290},
  {name: '2018-10-4', google: 2780, wechat: 3908, baidu: 2000},
  {name: '2018-10-5', google: 1890, wechat: 4800, baidu: 2181},
  {name: '2018-10-6', google: 2390, wechat: 3800, baidu: 2500},
  {name: '2018-10-7', google: 3490, wechat: 4300, baidu: 2100},
];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data01 = [
  {name: '2018-10-1', google: 4000, wechat: 2400, baidu: 2400},
  {name: '2018-10-2', google: 3000, wechat: 1398, baidu: 2210},
  {name: '2018-10-3', google: 2000, wechat: 9800, baidu: 2290},
  {name: '2018-10-4', google: 2780, wechat: 3908, baidu: 2000},
  {name: '2018-10-5', google: 1890, wechat: 4800, baidu: 2181},
  {name: '2018-10-6', google: 2390, wechat: 3800, baidu: 2500},
  {name: '2018-10-7', google: 3490, wechat: 4300, baidu: 2100},
];
const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};
function getListData(value) {
    let listData;
    switch (value.date()) {
      case 1:
        listData = [
          { content: '煎饼犯傻了' },
          { content: '煎饼二货了' },
        ]; break;
      case 10:
        listData = [
            { content: '吃好吃的了' },
        ]; break;
      case 15:
        listData = [
            { content: '要出份子钱了' },
        ]; break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <div>
        {
          listData.map(item => (
              <div className="calenText" key={item.content}>{item.content} </div>
            
          ))
        }
      </div>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  
class HomePage extends React.Component {
    constructor(arg) {
        super(arg);

    }
    state = {
      spending :[
        { name: '水电费', value: 400 },
        { name: '饮食', value: 2567 },
        { name: '旅游', value: 1398 },
        { name: '电子产品', value: 1800 },
        { name: '生活用品', value: 1908 },
        { name: '额外支出', value: 800 },
      ],
      income :[
        { name: '工资', value: 14000 },
        { name: '销售', value: 1567 },
        { name: '额外收入', value: 1398 },
      ]
    };
    componentWillMount = () => {
    }

    render() {
        
        return (
            <div className={style.root}>
            <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <div className="gutter-box">
        <Card title="happy time">
        <div className="happyTime">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
           
        </div>
        <p className="happyTimeDesc">
                描述一些日常生活...
            </p>
        </Card>
        </div>
      </Col>
      
      <Col className="gutter-row" span={12}>
        <div className="gutter-box">
        <Card title="每日一言">
        <div className="tipMessage">
        美丽的花虽然会凋谢，可是盛开的时刻值得欣赏。要在美好的时候创造出美好的东西，人生才会充满意义。
            </div>
        </Card>
       </div>
      </Col>
      
    </Row>
    <Row>
        <Col>
        <Card title="备忘录">
        <div className="calendarBox">
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
        </Card>
        </Col>
    </Row>
    <Row gutter={16}>
        <Col span={12}>
        <Card title="开支占比">
        <PieChart width={300} height={300}>
        
        <defs>
    <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ff38ac" />
      <stop offset="95%" stopColor="#ff386a"/>
    </linearGradient>
  </defs>
        <Pie
        dataKey="value"
        labelLine={false}
        label={renderCustomizedLabel}
          data={this.state.spending} 
          fill="url(#colorRed)"
          stopOpacity={0}
        >
       
        </Pie>
        <Tooltip/>
      </PieChart>
     

</Card>
        
        </Col>
        <Col span={12}>
        <Card title="收入占比">
        <PieChart width={300} height={300}>
        <defs>
          
    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#00d9bf" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#00d977" stopOpacity={0.8}/>
    </linearGradient>

  </defs>
        <Pie
        dataKey="value"
        labelLine={false}
        label={renderCustomizedLabel}
          data={this.state.income} 
          fill="url(#color)"
          stopOpacity={0}
        >
        
        	{
          	// data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip/>
      </PieChart>
     

</Card>
        
        </Col>
    </Row>
    <Row>
        <Col>
        <Card title="流量监控">
        <AreaChart width={930} height={300} data={data} stroke="#00d9bf">
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00d9bf" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#00d977" stopOpacity={0.8}/>
    </linearGradient>
    <linearGradient id="colorViolet" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ad59ff" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#7659ff" stopOpacity={0.8}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" axisLine={{stroke: '#a1a1e5'}} tick={{stroke: '#a1a1e5',strokeWidth: 0.3}}/>
  <YAxis axisLine={{stroke: '#a1a1e5'}} tick={{stroke: '#a1a1e5',strokeWidth: 0.3}}/>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <Tooltip cursor={{ stroke: '#00d9bf', strokeWidth: 2 }}/>
  <Area type="monotone" dataKey="google" stroke="#7659ff" fillOpacity={1} fill="url(#colorViolet)" />
<Area type="monotone" dataKey="baidu" stroke="#00d9bf" fillOpacity={1} fill="url(#colorUv)" />
 </AreaChart>
        </Card>
        </Col>
        </Row>
        <Row>
        <Col>
        <Card title="收入支出">
        <BarChart width={930} height={300} data={data01}  margin={{top: 20}}>
        <Tooltip cursor={{fillOpacity:0}}/>
  <defs>
    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00b3ff"/>
      <stop offset="95%" stopColor="#08f"/>
    </linearGradient>
    <linearGradient id="colorYellow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#fc0"/>
      <stop offset="95%" stopColor="#ffa100"/>
    </linearGradient>
  </defs>
       <XAxis fill="#00d9bf" dataKey="name" axisLine={{stroke: '#a1a1e5'}} tick={{stroke: '#a1a1e5',strokeWidth: 0.3}}/>
       <YAxis tick={{stroke: '#a1a1e5',strokeWidth: 0.3}} axisLine={{stroke: '#a1a1e5'}}/>
       {/* <CartesianGrid strokeDasharray="3 3"/> */}
       <Bar dataKey="google" fill="#82ca9d" label={{ position: 'top' }}>
       {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={"url(#colorYellow)"}/>
            ))
          }
          
      </Bar>
       <Bar dataKey="wechat" fill="url(#colorBlue)" label={{ position: 'top' }}>
       {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={"url(#colorBlue)"}/>
            ))
          }
       </Bar>
       
      </BarChart>
        </Card>
        </Col>
        </Row>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(HomePage);