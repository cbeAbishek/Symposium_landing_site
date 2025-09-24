import React from "react";
import departments from "./data";
import DepartmentUI from "./DepartmentUI";

type Props = {
  params: {
    dept: string;
  };
};

export default function DeptPage({ params }: Props) {
  const key = params.dept?.toLowerCase() ?? "";
  const dept = (departments as any)[key];

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Department not found</h1>
          <p className="text-gray-300 mt-2">No data available for {params.dept}</p>
        </div>
      </div>
    );
  }

  return <DepartmentUI department={dept} />;
}
