import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout() {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">NGO Admin Portal</h1>
        <button
          onClick={handleLogout}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </button>
      </nav>
      
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      
      <Toaster position="top-right" />
    </div>
  );
}
