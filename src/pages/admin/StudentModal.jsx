import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../lib/axios';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';

const getDriveDirectUrl = (url) => {
  if (!url) return null;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

export default function StudentModal({ student, onClose, onSuccess }) {
  const isEditing = !!student;
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: student || {}
  });

  const photoUrl = watch('studentPhotoUrl');
  const certUrl = watch('certificateUrl');

  const mutation = useMutation({
    mutationFn: async (data) => {
      if (isEditing) {
        await api.put(`/students/${student.id}`, data);
      } else {
        await api.post('/students', data);
      }
    },
    onSuccess: () => {
      toast.success(isEditing ? 'Student updated successfully' : 'Student created successfully');
      onSuccess();
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold">{isEditing ? 'Edit Student' : 'Add New Student'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Serial Number *</label>
              <input
                {...register('serialNo', { required: 'Serial number is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
                placeholder="NGO-2026-001"
              />
              {errors.serialNo && <p className="text-red-500 text-xs mt-1">{errors.serialNo.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name *</label>
              <input
                {...register('fatherName', { required: 'Father name is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Class *</label>
              <input
                {...register('studentClass', { required: 'Class is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                {...register('mobileNumber')}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">College Name *</label>
              <input
                {...register('collegeName', { required: 'College name is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date *</label>
              <input
                type="text"
                {...register('joiningDate', { required: 'Joining date is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
                placeholder="e.g. 15-05-2023"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ending Date *</label>
              <input
                type="text"
                {...register('endingDate', { required: 'Ending date is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
                placeholder="e.g. 15-06-2023"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number *</label>
              <input
                {...register('rollNumber', { required: 'Roll number is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Number *</label>
              <input
                {...register('enrollmentNumber', { required: 'Enrollment number is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <input
                {...register('category', { required: 'Category is required' })}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Permanent Address *</label>
              <textarea
                {...register('address', { required: 'Address is required' })}
                rows="2"
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Google Drive Link</label>
              <input
                type="url"
                {...register('certificateUrl')}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
                placeholder="https://drive.google.com/..."
              />
              {certUrl && (
                <div className="mt-2 text-sm">
                  <a href={certUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    Preview Certificate (Opens in new tab)
                  </a>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student Photo Google Drive Link</label>
              <input
                type="url"
                {...register('studentPhotoUrl')}
                className="w-full px-3 py-2 border rounded focus:ring-green-500 focus:border-green-500"
                placeholder="https://drive.google.com/..."
              />
              {photoUrl && (
                <div className="mt-2 flex items-center gap-3">
                  <img 
                    src={getDriveDirectUrl(photoUrl)} 
                    alt="Preview" 
                    className="w-12 h-12 object-cover rounded-full border shadow-sm"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <a href={photoUrl} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">
                    View Full Photo
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 border-t pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={mutation.isLoading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {mutation.isLoading ? 'Saving...' : 'Save Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
