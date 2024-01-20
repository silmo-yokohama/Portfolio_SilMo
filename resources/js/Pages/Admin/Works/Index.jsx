import AdminSectionHeader from "@/Components/Template/Headers/AdminSectionHeader";
import AdminPagination from "@/Components/Template/Paginations/AdminPagination";
import AdminListTable from "@/Components/Template/Tables/AdminListTable";
import { dateTimeFormat } from "@/Functions/DateFunctions";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useEffect, useState } from "react";

const Index = (props) => {
  const { works, ...options } = props;
  const { data } = works;
  const tableHeader = [
    { html: "名前" },
    { html: "公開日" },
    { html: "更新日" },
  ];
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const tableTemp = [];

    data.map((row) => {
      tableTemp.push({
        className: "hover:bg-base-200",
        cols: [
          { isHeader: true, html: row.name, className: "bg-inherit" },
          { html: dateTimeFormat(row.created_at) },
          { html: dateTimeFormat(row.updated_at) },
        ],
      });
    });

    setTableData(tableTemp);
  }, [data]);

  return (
    <AdminLayout pageTitle="実績" {...props}>
      <AdminSectionHeader
        title="実績一覧"
        backToRoute={route("admin.dashboard")}
      ></AdminSectionHeader>

      <AdminListTable headers={tableHeader} bodies={tableData} />

      <div className="mt-5 lg:mt-6">
        <AdminPagination links={works.links} />
      </div>
    </AdminLayout>
  );
};

export default Index;
