import React from 'react';
import { Link } from 'react-router-dom';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import './farmersSidebar.css';

function FarmersSidebar() {
  return (
    <div className='farmersidebar'>
      <aside>
        <ul>
          <li>PAGES</li>
          <li>
            <Link to="/authentication">
              Authentication <AdminPanelSettingsRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="http://localhost:3000/addanimal">
              Add New Animal <AddCircleOutlineRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="http://localhost:3000/updateanimal">
              Update Animal <EditNoteRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="http://localhost:3000/confirmrejectorder">
              Confirm / Reject Orders <ThumbUpAltRoundedIcon />
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default FarmersSidebar;
