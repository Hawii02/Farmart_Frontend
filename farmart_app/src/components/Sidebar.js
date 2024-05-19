import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul type>
            <li>
            <FilterListIcon/>Filter and Sort
            </li>
            <li>
            <CategoryOutlinedIcon/> Categories 
            </li>
            <li>
            <PetsOutlinedIcon/> Animal Type  
            </li>
            <li>
            <PetsOutlinedIcon/> Breed 
            </li>
            <li>
            <PriceChangeOutlinedIcon/> Price Range 
            </li>
            <li>
            <EventAvailableOutlinedIcon/> Product Availability  
            </li>
        </ul>
    </div>
  );
}

export default Sidebar;
