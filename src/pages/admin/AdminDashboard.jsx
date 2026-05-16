import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../lib/axios';
import { Plus, Search, Edit2, Trash2, Upload, FileText, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import StudentModal from './StudentModal';

const getDriveDirectUrl = (url) => {
  if (!url) return null;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

export default function AdminDashboard() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['students', page, search],
    queryFn: async () => {
      const res = await api.get(`/students?page=${page}&limit=10&search=${search}`);
      return res.data;
    },
    keepPreviousData: true
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await api.delete(`/students/${id}`);
    },
    onSuccess: () => {
      toast.success('Student deleted');
      queryClient.invalidateQueries(['students']);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to delete student');
    }
  });

  const importMutation = useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      const res = await api.post('/students/import-excel', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || 'Import completed');
      if (data.errors && data.errors.length > 0) {
        console.warn('Import Errors:', data.errors);
        toast.error(`${data.errors.length} rows had errors. Check console for details.`, { duration: 5000 });
      }
      queryClient.invalidateQueries(['students']);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'Failed to import Excel');
    }
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      importMutation.mutate(file);
      e.target.value = null; // Reset
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      deleteMutation.mutate(id);
    }
  };

  const openModal = (student = null) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search by name, serial, email, mobile..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <label className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center cursor-pointer">
              <Upload className="w-5 h-5 mr-2" />
              {importMutation.isPending ? 'Importing...' : 'Import Excel'}
              <input
                type="file"
                accept=".xlsx, .xls"
                className="hidden"
                onChange={handleFileUpload}
                disabled={importMutation.isPending}
              />
            </label>
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Student
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Serial No</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Course/Class</th>
              <th className="px-6 py-3">Dates</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">Loading...</td>
              </tr>
            ) : data?.data?.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">No students found</td>
              </tr>
            ) : (
              data?.data?.map((student) => (
                <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{student.serialNo}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {student.studentPhotoUrl ? (
                        <img
                          src={getDriveDirectUrl(student.studentPhotoUrl)}
                          alt={student.name}
                          className="w-10 h-10 rounded-full object-cover border shadow-sm"
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      {/* Fallback avatar if no photo or if image fails to load */}
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold" style={{ display: student.studentPhotoUrl ? 'none' : 'flex' }}>
                        {student.name ? student.name.charAt(0).toUpperCase() : '?'}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{student.name}</div>
                        <div className="text-xs text-gray-400">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>{student.studentClass}</div>
                    <div className="text-xs text-gray-400">{student.collegeName}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs">{student.joiningDate} to {student.endingDate}</div>
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    {student.certificateUrl && (
                      <a href={student.certificateUrl} target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-800" title="View Certificate">
                        <FileText className="w-4 h-4" />
                      </a>
                    )}
                    {student.studentPhotoUrl && (
                      <a href={student.studentPhotoUrl} target="_blank" rel="noreferrer" className="text-purple-600 hover:text-purple-800" title="View Original Photo">
                        <ImageIcon className="w-4 h-4" />
                      </a>
                    )}
                    <button onClick={() => openModal(student)} className="text-blue-600 hover:text-blue-800 ml-2" title="Edit Student">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(student.id)} className="text-red-600 hover:text-red-800" title="Delete Student">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {data?.pagination && data.pagination.pages > 1 && (
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <span className="text-sm text-gray-700">
            Showing Page {page} of {data.pagination.pages} (Total: {data.pagination.total})
          </span>
          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button
              disabled={page === data.pagination.pages}
              onClick={() => setPage(p => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            queryClient.invalidateQueries(['students']);
          }}
        />
      )}
    </div>
  );
}
