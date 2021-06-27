import React from 'react';
import MenuBar from '../Shared/MenuBar/MenuBar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AddService from './AddService';
import Sidebar from './Sidebar';
import OrdersList from './OrdersList';
import AdminNotice from './AdminNotice';

const Admin = () => {
    return (
        <div>
            <div>
                <MenuBar />
            </div>
            <div>
                <Router>
                    <Sidebar />
                    <Switch>
                        <Route path="/admin/addservice">
                            <AddService />
                        </Route>
                        <Route path="/admin/notice">
                            <AdminNotice/>
                        </Route>
                        <Route path="/admin/orderlist">
                            <OrdersList />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Admin;