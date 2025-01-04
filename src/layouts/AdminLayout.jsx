import React from "react";
import AdminNavbar from "../components/AdminNavbar";

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AdminNavbar />
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}

export default AdminLayout;
