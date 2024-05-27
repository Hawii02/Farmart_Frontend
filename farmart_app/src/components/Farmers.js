import React from 'react'
import './farmers.css'
import FarmersSidebar from "./FarmersSidebar";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './NavBar';

function Farmers() {

  const data = [
    {
      name: 'Poultry',
      uv: 6000,
      pv: 8500,
      amt: 2400,
    },
    {
      name: 'Livestock',
      uv: 6500,
      pv: 7000,
      amt: 2210,
    },
    {
      name: 'Equines',
      uv: 5000,
      pv: 3800,
      amt: 2290,
    },
    {
      name: 'Camelids',
      uv: 3780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Apiary',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Aquatic',
      uv: 4090,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Exotic',
      uv: 2490,
      pv: 2300,
      amt: 2100,
    },
  ];
  
  return (
    <div className='farmer-all'>
    < Navbar  />
    <div className='farmer-container'>
      <FarmersSidebar />
      <div className='side-grid'>
      <div className='farmer-title'>
        <h2>FARMERS DASHBOARD</h2>
        </div>
        
      <div className='farmer-cards'> 
        <div className='f-card'>
        <div className='card-inner'>
          <h3> ANIMALS</h3>
          <icon1><PetsOutlinedIcon/></icon1>
            </div>
           <h1> 257 </h1>
         </div>
      <div className='f-card'>
        <div className='card-inner'>
            <h3> CATEGORIES </h3>
          <icon1><CategoryOutlinedIcon/></icon1>
        </div>
        <h1> 7 </h1>
      </div>
      <div className='f-card'>
        <div className='card-inner'>
          <h3> USERS </h3>
          <icon1><AccountCircleOutlinedIcon /></icon1>
        </div>
        <h1> 33 </h1>
      </div>

      <div className='f-card'>
        <div className='card-inner'>
          <h3> ORDERS </h3>
          <icon1><ShoppingCartIcon /></icon1>
        </div>
        <h1> 51 </h1>
      </div>
      </div>
      <div className='charts'>

<ResponsiveContainer width="100%" height="100%">
  <BarChart
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  </ResponsiveContainer>

  <ResponsiveContainer width="100%" height="100%">
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
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
</ResponsiveContainer>

        </div>
      </div>
    </div> 
    < Footer />
    </div>
  )
}

export default Farmers;