import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Dashboard = (props) => {
  const { auth } = props;

  return (
    <AdminLayout {...props}>
      <span>Dashboard</span>
    </AdminLayout>
  );
};

export default Dashboard;
