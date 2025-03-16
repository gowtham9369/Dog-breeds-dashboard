import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}
const Layout:  React.FC<LayoutProps>= ({children}) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Home</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome Back!</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Dog Breeds</h2>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
