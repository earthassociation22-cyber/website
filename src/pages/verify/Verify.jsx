import { useState } from 'react';
import { api } from '../../lib/axios';
import { CheckCircle, XCircle, Search, Download } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Verify() {
  const [serialNo, setSerialNo] = useState('');
  const [credential, setCredential] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await api.post('/verify', { serialNo, credential });
      setResult(res.data);
    } catch (err) {
      setResult({ 
        verified: false, 
        message: err.response?.data?.message || 'Network Error: Verification failed or service unavailable.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-3xl w-full mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Certificate Verification</h2>
            <p className="mt-2 text-sm text-gray-600">
              Verify the authenticity of an internship certificate
            </p>
          </div>

          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="serialNo" className="block text-sm font-medium text-gray-700">
                    Certificate Serial Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="serialNo"
                      required
                      placeholder="e.g. NGO-2026-001"
                      value={serialNo}
                      onChange={(e) => setSerialNo(e.target.value)}
                      className="focus:ring-[#007022] focus:border-[#007022] block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md py-3 border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="credential" className="block text-sm font-medium text-gray-700">
                    Email / Mobile / Enrollment No
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="credential"
                      required
                      placeholder="Enter verification credential"
                      value={credential}
                      onChange={(e) => setCredential(e.target.value)}
                      className="focus:ring-[#007022] focus:border-[#007022] block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md py-3 border"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#007022] hover:bg-[#005c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007022] disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Verifying...' : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Verify Certificate
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Results Section */}
            {result && (
              <div className="mt-8 border-t pt-8">
                {result.verified ? (
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <div className="flex items-center justify-center mb-6">
                      <CheckCircle className="w-12 h-12 text-green-500 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-green-800">Certificate Verified</h3>
                        <p className="text-green-600">This certificate is authentic and registered.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      {result.student.studentPhotoUrl && (
                        <div className="flex justify-center md:col-span-1">
                          <a 
                            href={result.student.studentPhotoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 transition-colors text-green-700 text-center p-2 cursor-pointer"
                            title="Click to view full photo"
                          >
                            <svg className="w-8 h-8 mb-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs font-semibold leading-tight">Click to View<br/>Photo</span>
                          </a>
                        </div>
                      )}
                      
                      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${result.student.studentPhotoUrl ? 'md:col-span-2' : 'md:col-span-3'}`}>
                        <div>
                          <p className="text-sm text-gray-500">Student Name</p>
                          <p className="font-semibold text-gray-900">{result.student.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Father's Name</p>
                          <p className="font-semibold text-gray-900">{result.student.fatherName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Class / Course</p>
                          <p className="font-semibold text-gray-900">{result.student.studentClass}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">College Name</p>
                          <p className="font-semibold text-gray-900">{result.student.collegeName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Internship Duration</p>
                          <p className="font-semibold text-gray-900">{result.student.joiningDate} to {result.student.endingDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Roll Number</p>
                          <p className="font-semibold text-gray-900">{result.student.rollNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Enrollment Number</p>
                          <p className="font-semibold text-gray-900">{result.student.enrollmentNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Category</p>
                          <p className="font-semibold text-gray-900">{result.student.category}</p>
                        </div>
                      </div>
                    </div>

                    {result.student.certificateUrl && (
                      <div className="mt-8 text-center border-t border-green-200 pt-6">
                        <a
                          href={result.student.certificateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          View / Download Certificate
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-red-50 rounded-lg p-6 border border-red-200 text-center">
                    <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-red-800">Verification Failed</h3>
                    <p className="text-red-600 mt-2">
                      {result.message || 'No record found with the provided details. Please check the serial number and credentials and try again.'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
