import React from 'react';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import './farmersSidebar.css'

function FarmersSidebar() {
  return (
    <div className='farmersidebar'>
      <aside>
        <ul type>
            <li>PAGES</li>
            <li>
            Authentication <AdminPanelSettingsRoundedIcon />
            </li>
            <li>
            Add New Animal<AddCircleOutlineRoundedIcon/>
            </li>
            <li>
            Update Animal<EditNoteRoundedIcon/>
            </li>
            <li>
            Confirm / Reject Orders<ThumbUpAltRoundedIcon/>
            </li>
        </ul>
        </aside>
    </div>
  );
}

export default FarmersSidebar;
