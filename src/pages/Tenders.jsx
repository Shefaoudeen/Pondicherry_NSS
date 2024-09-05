import React, { useState } from 'react';
import tenders from '../Data/tendersData'; // Adjust the path based on your file structure

const Tenders = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(tenders.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Slice tenders array for current page
  const currentTenders = tenders.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tenders</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">S.No</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">End Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Attachment</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentTenders.map((tender, index) => (
                <tr key={tender.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{index + 1 + currentPage * itemsPerPage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{tender.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{tender.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{tender.endDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <a href={tender.attachment} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className={`px-4 py-2 border border-gray-300 rounded-md bg-red-500 text-white hover:bg-red-600 hover:text-white transition-colors ${currentPage === 0 ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`px-4 py-2 border border-gray-300 rounded-md ${index === currentPage ? 'bg-red-500 text-white' : 'bg-blue-900 text-white'} hover:bg-red-600 hover:text-white transition-colors`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={`px-4 py-2 border border-gray-300 rounded-md bg-red-500 text-white hover:bg-red-600 hover:text-white transition-colors ${currentPage === totalPages - 1 ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenders;
