import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Dashboard = (props) => {
  const { auth } = props;
  const squeres = [
    { class1: "bg-primary", class2: "text-primary-content" },
    { class1: "bg-secondary", class2: "text-secondary-content" },
    { class1: "bg-accent", class2: "text-accent-content" },
    { class1: "bg-neutral", class2: "text-neutral-content" },
    { class1: "bg-info", class2: "text-info-content" },
    { class1: "bg-success", class2: "text-success-content" },
    { class1: "bg-warning", class2: "text-warning-content" },
    { class1: "bg-error", class2: "text-error-content" },
    { class1: "bg-base-100", class2: "text-base-content" },
    { class1: "bg-base-200", class2: "text-base-content" },
    { class1: "bg-base-300", class2: "text-base-content" },
  ];

  return (
    <AdminLayout {...props}>
      <div className="flex flex-wrap gap-3">
        {squeres.map((squere, index) => (
          <div
            key={index}
            className={`flex h-32 w-32 items-center justify-center rounded-md border ${squere.class1}`}
          >
            <span className={`${squere.class2}`}>テキスト</span>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
