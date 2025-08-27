import React, { useState } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Transition } from "@headlessui/react";

const About = () => {
  const [isIntroShowing, setIsIntroShowing] = useState(true);
  const [isEducationShowing, setIsEducationShowing] = useState(false);
  const [isCareerShowing, setIsCareerShowing] = useState(false);

  const showEducationSection = () => {
    setIsIntroShowing(false);
    setIsCareerShowing(false);
    setIsEducationShowing(true);
  };

  const showCareerSection = () => {
    setIsIntroShowing(false);
    setIsEducationShowing(false);
    setIsCareerShowing(true);
  };

  const showIntroSection = () => {
    setIsEducationShowing(false);
    setIsCareerShowing(false);
    setIsIntroShowing(true);
  };

  return (
    <div
      className="bg-white dark:bg-black min-h-screen text-black dark:text-white text-lg"
      id="aboutContent"
    >
      <div className="py-10 px-4 sm:px-10 text-justify w-full mx-auto">
        <h1 className="text-3xl font-semibold text-[#007EA7] mb-6">About me</h1>

        <div id="horizontalScrollSection">
          <Transition
            show={isIntroShowing}
            as="section"
            id="Intro"
            enter="transition ease-in duration-1000"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-out duration-1000"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            aria-labelledby="intro-heading"
            aria-hidden={!isIntroShowing}
          >
            {isIntroShowing && (
              <div>
                <h2 id="intro-heading" className="sr-only">
                  Introduction
                </h2>
                <div className="text-right text-gray-400 hover:text-black dark:hover:text-white pb-2">
                  <button
                    type="button"
                    className="p-1"
                    onClick={showEducationSection}
                    aria-label="Navigate to Education section"
                  >
                    Education
                    <IoIosArrowRoundForward className="inline ml-2" />
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/2">
                    <p>
                      I am a young professional with a passion for web
                      technologies, cloud services and information security.
                      Seeking positions that match skills &#38; experience,
                      allowing for professional growth and impactful
                      contributions to modern software projects. I consider
                      myself to be a flexible and adaptable individual who finds
                      joy in learning about new cultures, working with people
                      from diverse backgrounds and contributing from my own
                      experiences to the communities that welcome me.
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <img
                      src="https://s3.eu-central-1.amazonaws.com/storage-diegocisneros.dev/images/profilePic.jpg"
                      alt="Diego Cisneros profile"
                      className="w-full sm:h-[70vh] h-[30vh] mx-auto rounded-xl outline-double outline-[#007EA7]"
                    />
                  </div>
                </div>
              </div>
            )}
          </Transition>

          <Transition
            show={isEducationShowing}
            as="section"
            id="EducationSection"
            enter="transition ease-in duration-1000"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-out duration-1000"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            aria-labelledby="education-heading"
            aria-hidden={!isEducationShowing}
          >
            {isEducationShowing && (
              <div>
                <h2 id="education-heading" className="sr-only">
                  Education
                </h2>
                <div className="pb-2 flex justify-between">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-black dark:hover:text-white p-1"
                    onClick={showIntroSection}
                    aria-label="Navigate to Introduction section"
                  >
                    <IoIosArrowRoundBack className="inline mr-2" />
                    Intro
                  </button>

                  <button
                    type="button"
                    className="text-gray-400 hover:text-black dark:hover:text-white p-1"
                    onClick={showCareerSection}
                    aria-label="Navigate to Career section"
                  >
                    Career
                    <IoIosArrowRoundForward className="inline ml-2" />
                  </button>
                </div>
                <div className="space-y-4">
                  <p>
                    From a young age I was fortunate to be able to receive high
                    quality education that went beyond gaining knowledge, also
                    focusing on instilling values and forming well rounded
                    people.
                  </p>

                  <p>
                    After finishing high-school I decided to pursue my higher
                    education in England knowing that this decision would mean
                    being able to get exceptional education, learn valuable life
                    skills and gain more independence. During 2012-2013, I went
                    to the
                    <a
                      className="default-link mx-1"
                      href="http://www.bristol.ac.uk/"
                    >
                      University of Bristol
                    </a>
                    to do an IFP English with Physics and Mathematics course.
                    Following this first experience I moved on to the
                    <a
                      className="default-link mx-1"
                      href="http://www.essex.ac.uk/"
                    >
                      University of Essex
                    </a>
                    in 2013 to start a BSc. Computer Science degree after which
                    I completed an MSc. Advanced Web Engineering at the same
                    institution culminating my studies in July 2018.
                  </p>

                  <p>
                    The undergraduate and postgraduate degrees I obtained at the
                    University of Essex provided me with a good understanding of
                    fundamental concepts in the IT field and I believe have
                    equipped me with valuable software design and development
                    skills across a wide range of subjects. I learned these by
                    taking various modules such as: Professional development,
                    Object-Oriented programming, Web development, Introduction
                    to Databases, Network Fundamentals, Software engineering,
                    Application programming, Data structures and algorithms,
                    Human computer interfaces and visualisation, Web application
                    programming and Advanced programming among others. On my
                    final year of undergraduate I worked on a program for the
                    rendering of procedurally generated 3D cities using PyOpenGL
                    and for my postgraduate dissertation project I developed a
                    web-based IoT fuzzy ventilation controller dependent on room
                    temperature and humidity.
                  </p>

                  <p>
                    Along my studies, I found a prime interest in web
                    technologies and the possibilities that internet
                    applications offer. I am fascinated by the profound impact
                    on society and scale of some of the world leading companies
                    in the field e.g. Amazon, Facebook, Google, Netflix, etc.
                    and would like to be part of the revolution, and perhaps
                    even one day begin my own online business. I have learned
                    the importance of frontend interface design and enjoy the
                    process of optimizing application backends for a scalable
                    performance that ensures a pleasant user experience.
                  </p>
                </div>
              </div>
            )}
          </Transition>

          <Transition
            show={isCareerShowing}
            as="section"
            id="CareerSection"
            enter="transition ease-in duration-1000"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-out duration-1000"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            aria-labelledby="career-heading"
            aria-hidden={!isCareerShowing}
          >
            {isCareerShowing && (
              <div>
                <h2 id="career-heading" className="sr-only">
                  Career
                </h2>
                <div className="pb-2 flex justify-between">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-black dark:hover:text-white p-1"
                    onClick={showEducationSection}
                    aria-label="Navigate to Education section"
                  >
                    <IoIosArrowRoundBack className="inline mr-2" />
                    Education
                  </button>
                </div>
                <div className="space-y-4">
                  <p>
                    During my professional career so far I have had the
                    opportunity to work at
                    <a
                      className="default-link mx-1"
                      href="https://www.tci.net.pe/"
                    >
                      TCI S.A
                    </a>
                    as a junior software engineer working mainly with Java
                    utilizing the Spring boot framework to develop and maintain
                    microservice architectured applications. Additionally I
                    employed NodeJS and Python in a lesser capacity to develop
                    and maintain scripts to be deployed using
                    <a
                      className="default-link mx-1"
                      href="https://cloud.google.com/functions"
                    >
                      GCP Cloud Functions service
                    </a>
                    . Other services I became familiar with are:
                    <a
                      className="default-link mx-1"
                      href="https://cloud.google.com/storage"
                    >
                      GCP Cloud Storage
                    </a>
                    ,
                    <a
                      className="default-link mx-1"
                      href="https://cloud.google.com/logging"
                    >
                      GCP Cloud Logging
                    </a>
                    ,
                    <a
                      className="default-link mx-1"
                      href="https://cloud.google.com/compute"
                    >
                      GCP Compute Engine
                    </a>
                    and
                    <a
                      className="default-link mx-1"
                      href="https://cloud.google.com/pubsub"
                    >
                      GCP Pub/Sub
                    </a>
                    to name a few.
                  </p>

                  <p>
                    In the beginning of 2021 I moved to Rome - Italy to join{" "}
                    <a
                      className="default-link mx-1"
                      href="https://www.atsec.it"
                    >
                      Atsec information security S.R.L
                    </a>{" "}
                    as an Information Technology Security Engineer. My main
                    activities are to perform{" "}
                    <a
                      className="default-link mx-1"
                      href="https://www.commoncriteriaportal.org/"
                    >
                      Common Criteria
                    </a>{" "}
                    compliant security evaluations by auditing documentation,
                    performing penetration testing, vulnerabilities assessments,
                    etc. on a wide range of IT products for our clients which
                    include some of the biggest vendors in the industry e.g.
                    IBM, HP, Huawei, etc. Moreover, I contribute to the
                    development and maintenance of software projects for
                    internal use with Python and Javascript based frameworks.
                  </p>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default About;
