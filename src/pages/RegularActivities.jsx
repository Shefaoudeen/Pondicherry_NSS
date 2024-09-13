import React, { useState } from 'react';

const RegularActivities = () => {
  const [activeTab, setActiveTab] = useState('villages');

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900">Regular Activities</h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar for Tabs */}
          <nav className="lg:w-1/4">
            <ul className="flex flex-col bg-white rounded-lg shadow-md">
              <li>
                <button
                  onClick={() => setActiveTab('villages')}
                  className={`w-full px-6 py-4 text-left text-lg font-semibold ${
                    activeTab === 'villages' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  Adoption of Villages
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('slums')}
                  className={`w-full px-6 py-4 text-left text-lg font-semibold ${
                    activeTab === 'slums' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  Adoption of Slums
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('coordination')}
                  className={`w-full px-6 py-4 text-left text-lg font-semibold ${
                    activeTab === 'coordination' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  Coordination with Voluntary Organizations
                </button>
              </li>
            </ul>
          </nav>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {activeTab === 'villages' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Adoption of Villages</h2>
                <p className="text-gray-600 mb-4">
                  <strong>1.1 Adoption of a village:</strong> Concentrate attention on one village to ensure continuity of work and sustained action.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>1.2 Contacting Village/Area Leaders:</strong> Establish contact with village leaders to ensure proper leadership for sustained follow-up.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>1.3 Survey of the Village/Area:</strong> Conduct comprehensive surveys with the help of various faculties to gather up-to-date information.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>1.4 Identification of Problems:</strong> Formulate projects based on needs assessment and community assistance.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>1.5 Information Dissemination:</strong> Provide information on various schemes and development ideas to improve living conditions.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>1.6 Motivating Communities:</strong> Engage with communities and government agencies for effective community development.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>1.7 Completion of Projects:</strong> Select and complete projects carefully to build the image of NSS.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>1.8 Evaluation of Projects:</strong> Evaluate each project post-completion to learn from execution lapses and plan future projects.
                </p>
              </div>
            )}

            {activeTab === 'slums' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Adoption of Slums</h2>
                <p className="text-gray-600 mb-4">
                  <strong>2.1 Survey of the Slum:</strong> Form a survey team to assess slum conditions and select areas for adoption.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>2.2 Project Planning:</strong> Undertake project planning and execution based on similar principles as village adoption.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>2.3 Services in Slums:</strong> Focus on improving water, sanitation, electricity, and overall living conditions.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>2.4 NSS Volunteers for Slum Work:</strong> Tasks include community profiling, problem identification, and program assistance.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>2.5 Suggestions for Slum Selection:</strong> Criteria for selecting slums for effective intervention and involvement.
                </p>
              </div>
            )}

            {activeTab === 'coordination' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Coordination with Voluntary Organizations</h2>
                <p className="text-gray-600 mb-4">
                  <strong>3.1 Identifying Assistance:</strong> Coordinate with government agencies and voluntary organizations for project support.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>3.2 Planning and Execution:</strong> Plan activities to utilize volunteers' time effectively and follow up on previous work.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularActivities;
