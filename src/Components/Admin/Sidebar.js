import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlusSquare,faEdit, faSignOutAlt, faCalendar, faGripHorizontal, faUsers ,faUserPlus, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="row justify-content-center marginAuto">
            <div className="col-md-4">
                <Link to="/admin">  Admin Dashboard </Link> 
                <Link to="/admin/addservice"> <FontAwesomeIcon icon={faPlusSquare} />  Add Service </Link>
                <Link to="/admin/orderlist"> <FontAwesomeIcon icon={faFileAlt} /> Order List </Link>
            </div>            
        </div>
    );
};

export default Sidebar;