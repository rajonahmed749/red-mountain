import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlusSquare, faEdit, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="row justify-content-center marginAuto">
            <div className="col-md-4">
                <Button variant="light">
                    <Link to="/admin/notice">  Admin Dashboard </Link>
                </Button>
                <Button variant="light">
                    <Link to="/admin/addservice"> <FontAwesomeIcon icon={faPlusSquare} />  Add Service </Link>
                </Button>
                {/* <Button variant="light">
                    <Link to="/admin/orderlist"> <FontAwesomeIcon icon={faFileAlt} /> Order List </Link>
                </Button> */}
            </div>
        </div>
    );
};

export default Sidebar;