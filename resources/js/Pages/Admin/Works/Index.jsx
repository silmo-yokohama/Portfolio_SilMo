import LinkButton from "@/Components/Forms/Buttons/LinkButton";
import NormalLink from "@/Components/Forms/Typographies/NormalLink";
import AdminSectionHeader from "@/Components/Template/Headers/AdminSectionHeader";
import AdminPagination from "@/Components/Template/Paginations/AdminPagination";
import AdminListTable from "@/Components/Template/Tables/AdminListTable";
import { dateTimeFormat } from "@/Functions/DateFunctions";
import AdminLayout from "@/Layouts/AdminLayout";
import AddIcon from "@/SVG/AddIcon";
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
      const link = (
        <NormalLink href={route("admin.works.edit", { id: row.id })}>
          {row.name}
        </NormalLink>
      );

      tableTemp.push({
        className: "hover:bg-base-200",
        cols: [
          { isHeader: true, html: link, className: "bg-inherit" },
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
      >
        <LinkButton
          href={""}
          className="group flex flex-col items-center justify-center px-3"
        >
          <AddIcon size={22} className="t group-hover:fill-accent" />
          <span className="t mx-2 hidden text-sm group-hover:text-accent lg:inline">
            追加
          </span>
        </LinkButton>
      </AdminSectionHeader>

      <AdminListTable headers={tableHeader} bodies={tableData} />

      <div className="mt-5 lg:mt-6">
        <AdminPagination links={works.links} />
      </div>
    </AdminLayout>
  );
};

export default Index;
