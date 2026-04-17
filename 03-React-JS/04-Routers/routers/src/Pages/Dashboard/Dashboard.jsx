import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <div>
                <h5>Dashboard Links</h5>
                <Link to="/dashboard/student">Student</Link>
                <Link to="/dashboard/teacher">Teacher</Link>
                <Link to="/dashboard/manager">Manager</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Dashboard