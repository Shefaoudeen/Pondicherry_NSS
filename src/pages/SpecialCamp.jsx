import React from "react";

import Navbar from "../Layout/Navbar";

const SpecialCamp = () => {
  return (
    <>
      <div className="p-40 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Special Camping Programme
        </h1>
        <p className="mb-6">
          Special Camping forms an integral part of National Service Scheme. It
          has special appeal to the youth as it provides unique opportunities to
          the students for group living, collective experience sharing, and
          constant interaction with the community.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Special Camping Overview
          </h2>
          <p className="mb-4">
            Special camping is organized generally on various developmental
            issues of national importance. Past themes include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Youth Against Famine</li>
            <li>Youth Against Dirt and Disease</li>
            <li>Youth for Rural Reconstruction</li>
            <li>Youth for Eco-Development</li>
            <li>Youth for Mass Literacy</li>
            <li>Youth for National Integration & Social Harmony</li>
            <li>Youth for Sustainable Development</li>
          </ul>
          <p>
            Every year, 50% of volunteers from each NSS unit participate in
            special camps which last for seven days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Contributions of Special Camping Programme
          </h2>
          <p className="mb-4">
            Special Camping contributes significantly to rural reconstruction
            and social development, with universities, colleges, and local
            authorities playing a crucial role.
          </p>
          <p>
            Camps are organized year after year in villages and urban slums to
            create tangible and durable community assets.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Objectives of the Special Camping Programme
          </h2>
          <ul className="list-decimal list-inside mb-4 space-y-2">
            <li>Make education more relevant to community needs.</li>
            <li>
              Provide opportunities for NSS volunteers to participate in
              development projects.
            </li>
            <li>
              Encourage youth to work with adults in rural areas to develop
              character and social consciousness.
            </li>
            <li>
              Build potential youth leaders through involvement in development
              projects.
            </li>
            <li>
              Emphasize the dignity of labor and self-help, combining physical
              work with intellectual pursuits.
            </li>
            <li>
              Promote national integration through democratic living and
              cooperative action.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Suggestive Activities During Regular and Special Camping
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Environment Enrichment
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tree plantation and preservation</li>
                <li>Creation of NSS parks/gardens</li>
                <li>Maintenance of village streets and drains</li>
                <li>Environmental sanitation</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Health, Family Welfare & Nutrition
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Mass immunization programmes</li>
                <li>Safe and clean drinking water initiatives</li>
                <li>AIDS Awareness and preliminary healthcare</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Programmes for Women's Status Improvement
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Education on women's rights</li>
                <li>Training in vocational skills</li>
                <li>Beti Bachao Beti Padhao initiative</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Social Service Programmes
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Work in hospitals and child welfare organizations</li>
                <li>Organizing blood donation drives</li>
                <li>Supporting welfare organizations for women</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-3">
            Additional Activities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Production oriented programmes like soil-testing and pest control
            </li>
            <li>Relief and rehabilitation work during natural calamities</li>
            <li>Educational and recreational activities for the community</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default SpecialCamp;
