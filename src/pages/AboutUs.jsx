import React, { useEffect, useRef } from "react";
import { OrganisationPic } from "../assets/images";
import SidebarMenu from "../Components/SidebarMenu";

const AboutUs = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    if (aboutSectionRef.current)
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="w-screen bg-gray-100">
      <div className="pt-10 w-[90%] md:w-[75%] mx-auto " ref={aboutSectionRef}>
        <SidebarMenu
          breadCrumb={[
            { label: "Home", path: "/" },
            { label: "About us", path: "/aboutus" },
          ]}
        >
          <div>
            <h1 className="text-3xl text-black/65">Organisation</h1>
            <img
              src={OrganisationPic}
              className="object-cover mt-5"
              alt="Group pic"
            />

            <h1 className="text-3xl mt-5 text-black/65">Introduction</h1>
            <div className="mt-3">
              <p className="text-justify">
                In India, the idea of involving students in the task of national
                service dates back to the times of Mahatma Gandhi, the father of
                the nation. The central theme which he tried to impress upon his
                student audience time and again, was that they should always
                keep before them, their social responsibility. The first duty of
                the students should be, not to treat their period of study as
                one of the opportunities for indulgence in intellectual luxury,
                but for preparing themselves for final dedication in the service
                of those who provided the sinews of the nation with the national
                goods & services so essential to society. Advising them to form
                a living contact with the community in whose midst their
                institution is located, he suggested that instead of undertaking
                academic research about economic and social disability, the
                students should do "something positive so that the life of the
                villagers might be raised to a higher material and moral level".
              </p>
              <br />
              <p className="text-justify">
                The post-independence era was marked by an urge for introducing
                social service for students, both as a measure of educational
                reform and as a means to improve the quality of educated
                manpower. The University Grants Commission headed by Dr.
                Radhakrishnan recommended introduction of national service in
                the academic institutions on a voluntary basis with a view to
                developing healthy contacts between the students and teachers on
                the one hand and establishing a constructive linkage between the
                campus and the community on the other hand.
              </p>
              <br />
              <p className="text-justify">
                The idea was again considered by the Central Advisory Board of
                Education (CABE) at its meeting held in January, 1950. After
                examining the various aspects of the matter and in the light of
                experience of other countries in this field, the Board
                recommended that students should devote some time to manual work
                on a voluntary basis and that the teachers should also associate
                with them in such work. In the draft First Five Year Plan
                adopted by the Government of India in 1952, the need for social
                and labour service for students for one year was further
                stressed. Consequent upon this, labour and social service camps,
                campus work projects, village apprenticeship scheme etc. were
                put into operation by various educational institutions, In 1958,
                the then Prime Minister Pandit Jawaharlal Nehru in his letter to
                the Chief-Ministers, mooted the idea of having social service as
                a prerequisite for graduation. He further directed the Ministry
                of Education to formulate a suitable scheme for introduction of
                national service into the academic institutions.
              </p>
              <br />
              <p className="text-justify">
                In 1959, a draft outline of the scheme was placed before the
                Education Minister's Conference. The Conference was unanimous
                about the urgent need for trying out a workable scheme for
                national service. In view of the fact that education as it was
                imparted in schools and colleges, left something to be desired
                and it was necessary to supplement it with programmes which
                would arouse interest the social and economic reconstruction of
                the country. It was viewed that if the objectives of the scheme
                were to be realized, it was essential to integrate social
                service with the educational process as early as possible. The
                Conference suggested the appointment of a committee to work out
                details of the proposed pilot project. In pursuance of these
                recommendations, a National Service Committee was appointed
                under the Chairmanship of Dr. C.D. Deshmukh on August 28, 1959
                to make concrete suggestions in this direction. The committee
                recommended that national service for a period of nine months to
                a year may be made compulsory for all students completing high
                school education and intending to enroll themselves in a college
                or a university. The scheme was to include some military
                training, social service, manual labour and general education.
                The recommendations of the Committee could not be accepted
                because of its financial implications and difficulties in
                implementation.
              </p>
              <br />
              <p className="text-justify">
                In 1960, at the instance of the Government of India, Prof. K.G.
                Saiyidain studied national service by students implemented in
                several countries of the world and submitted his report under
                the title "National Service for the Youth" to the Government
                with a number of recommendations as to what could be done in
                India to develop a feasible scheme of social service by
                students. It was also recommended that social service camps
                should be open to students as well as non-students within the
                prescribed age group for better inter-relationship.
              </p>
              <br />
              <p className="text-justify">
                The Education Commission headed by Dr. D.S. Kothari (1964-66)
                recommended that students at all' stages of education should be
                associated with some form of social service. This was taken into
                account by the State Education Minister during their conference
                in April 1967 and they recommended that at the university stage,
                students could be permitted to join the National Cadet Corps
                (NCC) which was already in existence on a voluntary basis and an
                alternative to this could be offered to them in the form of a
                new programme called the National Service Scheme (NSS).
                Promising sportsmen, however, should be exempted from both and
                allowed to join another scheme called the National Sports
                Organisation (NSO), in view of the need to give priority to the
                development of sports and athletics.
              </p>
              <br />
              <p className="text-justify">
                The Vice-Chancellors' Conference in September, 1969 welcomed
                this recommendation and suggested that a special committee of
                Vice Chancellors could be set up to examine this question in
                detail. In the statement of national policy on education of the
                Government of India, it was laid down that work experience and
                national service should be an integral part of education. In
                May, 1969, a conference of the students' representatives of the
                universities and institutions of higher learning convened by the
                Ministry of Education and the University Grants Commission also
                unanimously declared 'that national service could be a powerful
                instrument for national integration. It could be used to
                introduce urban students to rural life. Projects of permanent
                value could also be undertaken as a symbol of the contribution
                of the student community to the progress and upliftment of the
                nation.
              </p>
              <br />
              <p className="text-justify">
                The details were soon worked out and the Planning Commission
                sanctioned an outlay budget of Rs. 5 crores for National Service
                Scheme (NSS) during the. Fourth Five Year Plan. It was
                stipulated that the NSS programme should be started as a pilot
                project in selected institutions and universities.
              </p>
              <br />
              <p className="text-justify">
                On September 24, 1969, the then Union Education Minister Dr.
                V.K.R.V. Rao, launched the NSS programme in 37 universities
                covering all States and simultaneously requested the Chief
                Ministers of States for their cooperation and help. It was
                appropriate that the programme was started during the Gandhi
                Centenary Year as it was Gandhi Ji who inspired the Indian youth
                to participate in the movement for India’s independence and the
                social upliftment of the downtrodden masses of our nation.
              </p>
              <br />
              <p className="text-justify">
                The cardinal principle of the programme is that it is organised
                by the students themselves and both students and teachers
                through their combined participation in social service, get a
                sense of involvement in the tasks of national development.
                Besides, the students, particularly, obtain work experience
                which might help them to find avenues of self-employment or
                employment in any organisation at the end of their university
                career. The initial financial arrangements provided for an
                expenditure of Rs. 120/- per NSS student per annum to be shared
                by the Central and the State Governments in the ratio of 7:5
                i.e. the Central Government spending Rs. 70/- and State
                Governments Rs. 50/- respectively per NSS student per year. An
                amount of Rs. 120/- per NSS student per annum on programmes to
                be shared by the Central and State Governments in the ration of
                7:5 (i.e. Rs. 70/- per student by the central government and Rs.
                50/- per student by the State Governments). Now, the NSS is a
                Central Sector Scheme of Government of India and to run its
                activities & Programmes in all the States and Union Territories
                are fully funded by the Central Government. Keeping the
                inflation in view, the budget for Special Camping and Regular
                Activities is as follows:
              </p>
              <br />
              <p className=" text-slate-500">
                Regular Activities: Rs.400/- per volunteer, per annum.
              </p>
              <p className=" text-slate-500">
                Special Camping Programme: Rs.700/- per volunteer, for two
                consecutive years..
              </p>
              <br />
              <ul className=" list-disc list-inside">
                <li className="text-justify">
                  The scheme now extends to all the states/Union Territories and
                  universities in the country and covers Councils of +2 level in
                  the country also in many states. Students, teachers,
                  guardians, persons in authority in government, universities
                  and colleges/schools and the people in general now realize the
                  need and significance of NSS. It has aroused among the student
                  youth an awareness of the realities of life, a better
                  understanding and appreciation of the problems of the people.
                  NSS is, thus, a concrete attempt in making campus relevant to
                  the needs of the community. There are several instances of
                  excellent work and exemplary conduct of NSS units which have
                  earned them appreciation respect and confidence of the people.
                  The special camping programmes organised under the themes of
                  'Youth Against Famine (1973)', 'Youth Against Dirt & Disease
                  (1974-75)', 'Youth for Eco-Development' and "Youth for Rural
                  Reconstruction' 'Youth for National Development and Youth for
                  Literacy (1985-93)' 'Youth for National Integration and
                  Communal Harmony (1993-95)' have resulted in gains both to the
                  community as well as to the students. The theme for the year
                  1995-96 onwards for Special Camping is Youth for Sustainable
                  Development with focus on Watershed Management and Water land
                  Development'. Themes have been selected in accordance with
                  national priorities. Also, from 1991-92 onwards NSS has
                  launched a nationwide campaign on AIDS Awareness called
                  "Universities Talk AIDS" (UTA) which has earned international
                  attention and appreciation.
                </li>
                <br />
                <li className="text-justify">
                  Community service rendered by university and +2 level students
                  has covered several aspects like adoption of villages & Urban
                  slums for intensive development work, carrying out the
                  medico-social surveys, setting up of medical centres,
                  programmes of mass immunization, sanitation drives, adult
                  education programmes for the weaker sections of the community,
                  blood donation, helping patients in hospitals, helping inmates
                  of orphanages and the physically handicapped etc. NSS
                  volunteers rendered commendable relief work during natural
                  calamities/emergencies such as cyclones, floods, famine,
                  earthquake, tsunamis etc from time to time all over the
                  country. The NSS students have also done useful work in
                  organising campaigns for eradication of social evils, and
                  popularization of the nationally accepted objectives like
                  nationalism, democracy, secularism, social harmony and
                  development of scientific temper.
                </li>
                <br />
              </ul>
            </div>
          </div>
        </SidebarMenu>
      </div>
    </div>
  );
};

export default AboutUs;
