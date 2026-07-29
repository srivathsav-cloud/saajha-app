import type { ReactNode } from 'react';

type Column<T> = {
  header: string;
  render: (item: T) => ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  rowKey: (item: T) => string;
};

export function DataTable<T>({ columns, data, rowKey }: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-[28px] border border-[#DCE7F5] bg-white shadow-card">
      <table className="w-full min-w-full border-separate border-spacing-0 text-sm text-[#33445F] table-auto">
        <thead className="bg-[#F8FBFF] text-left text-xs uppercase tracking-[0.12em] text-[#51617D]">
          <tr>
            {columns.map((column) => (
              <th key={column.header} className="px-4 py-3 font-semibold">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={rowKey(row)} className="border-t border-[#E3E9F5] hover:bg-[#F8FBFF]">
              {columns.map((column) => (
                <td key={column.header} className="px-4 py-4 align-top">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
