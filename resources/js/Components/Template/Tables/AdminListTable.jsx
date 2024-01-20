import React from "react";

const AdminListTable = ({ headers, bodies, ...props }) => {
  return (
    <div className="overflow-x-auto px-3 md:px-0">
      <table className="table table-pin-cols table-xs whitespace-nowrap">
        <thead>
          <tr className="bg-secondary">
            {headers &&
              headers.map((header, index) => (
                <th
                  scope="col"
                  key={index}
                  className={`bg-neutral p-5 ${header.className}`}
                >
                  {header.html}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {bodies ? (
            bodies.map((body, index) => (
              <tr
                key={index}
                className={`border-b border-base-300 hover:bg-base-300 ${body.className}`}
              >
                {body.cols.map((col, index) => {
                  return col.isHeader ? (
                    <th
                      key={index}
                      className={`max-w-xs py-3 ${col.className}`}
                    >
                      {col.html}
                    </th>
                  ) : (
                    <td key={index} className={col.className}>
                      {col.html}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <div className="No Data"></div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminListTable;
