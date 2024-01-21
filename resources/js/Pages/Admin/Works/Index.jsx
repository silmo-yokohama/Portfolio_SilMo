import CreateButton from "@/Components/Forms/Buttons/CreateButton";
import LinkButton from "@/Components/Forms/Buttons/LinkButton";
import ListTrashButton from "@/Components/Forms/Buttons/ListTrashButton";
import NormalLink from "@/Components/Forms/Typographies/NormalLink";
import AdminSectionHeader from "@/Components/Template/Headers/AdminSectionHeader";
import AdminPagination from "@/Components/Template/Paginations/AdminPagination";
import AdminListTable from "@/Components/Template/Tables/AdminListTable";
import { dataDelete } from "@/Functions/CrudRequestHelper";
import { dateTimeFormat } from "@/Functions/DateFunctions";
import AdminLayout from "@/Layouts/AdminLayout";
import AddIcon from "@/SVG/AddIcon";
import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Index = (props) => {
  const { works, ...options } = props;
  const { data } = works;
  const tableHeader = [
    { html: "名前" },
    { html: "公開日" },
    { html: "更新日" },
    { html: "", className: "w-[50px]" },
  ];
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const tableTemp = [];

    console.log(data);
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
          {
            html: (
              <ListTrashButton
                onClick={() => dataDelete(row.id, row.name, "works")}
              />
            ),
          },
        ],
      });
    });

    setTableData(tableTemp);
  }, [works]);

  return (
    <AdminLayout pageTitle="実績" {...props}>
      <AdminSectionHeader
        title="実績一覧"
        backToRoute={route("admin.dashboard")}
      >
        <CreateButton onClick={() => router.get(route("admin.works.create"))}>
          追加
        </CreateButton>
      </AdminSectionHeader>

      <AdminListTable headers={tableHeader} bodies={tableData} />

      <div className="mt-5 lg:mt-6">
        <AdminPagination links={works.links} />
      </div>
    </AdminLayout>
  );
};

export default Index;
