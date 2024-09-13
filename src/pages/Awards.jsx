import React from 'react';

const awards = [
  {
    title: "Excellence in Community Service",
    description: "Awarded for outstanding contributions to community development and engagement.",
    year: 2023
  },
  {
    title: "Best Volunteer Program",
    description: "Recognized for designing and executing the most impactful volunteer program of the year.",
    year: 2022
  },
  {
    title: "Leadership Award",
    description: "Honored for exceptional leadership and dedication to the cause.",
    year: 2021
  },
  {
    title: "Innovative Project Award",
    description: "Awarded for the most innovative and effective project implementation.",
    year: 2020
  }
];

const Awards = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Awards and Recognitions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <div className="bg-blue-500 text-white rounded-full p-3 mb-4 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m0 4h12m-8 4v4m0 0h-4m4 0v4m0-4h4m-4-6h8m-8 6v-4m0 0h-4m4 4h4m-4-6h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{award.title}</h3>
              <p className="text-gray-700 mb-4">{award.description}</p>
              <span className="text-gray-500">Year: {award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
