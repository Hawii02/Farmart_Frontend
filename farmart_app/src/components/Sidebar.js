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
            Filter and Sort<FilterListIcon/>
            </li>
            <li>
           Categories <CategoryOutlinedIcon/>
            </li>
            <li>
           Animal Type  <PetsOutlinedIcon/>
            </li>
            <li>
            Breed <PetsOutlinedIcon/>
            </li>
            <li>
            Price Range <PriceChangeOutlinedIcon/>
            </li>
            <li>
           Product Availability  <EventAvailableOutlinedIcon/>
            </li>
        </ul>
    </div>
  );
}

export default Sidebar;
