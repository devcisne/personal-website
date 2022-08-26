import React, { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HTMLReactParser from "html-react-parser";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

const CollapsableSection = ({ title, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {!isCollapsed && (
          <IoIosArrowDroprightCircle className="inline mr-2" color="#007EA7" />
        )}
        {isCollapsed && (
          <IoIosArrowDropdownCircle className="inline mr-2" color="#007EA7" />
        )}
        <h1 className="text-l font-semibold text-[#007EA7] inline hover:underline hover:decoration-[#00A8E8]">{title}</h1>
      </button>
      {!isCollapsed && (
        <>
          <br />
          <p>{HTMLReactParser(text[0].slice(0, 180))}...</p>
        </>
      )}
      {isCollapsed && (
        <div>
          {text.map((paragraph) => (
            <Fragment key={(Math.random() + 1).toString(36).substring(2, 5)} >
              <p>{HTMLReactParser(paragraph)}</p>
              <br />
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};

const About = () => {
  const educationTextArray = [
    `From a young age I was fortunate to be
      able to receive high quality education that went beyond gaining
      knowledge, also focusing on instilling values and forming well
      rounded people.`,
    `
      After finishing high-school I decided to pursue my higher education
      in England knowing that this decision would mean being able to get
      exceptional education, learn valuable life skills and gain more
      independence. During 2012-2013, I went to the
      <a
        className="default-link"
        href="http://www.bristol.ac.uk/"
      >
        University of Bristol
      </a>
      to do an IFP English with Physics and Mathematics course. Following
      this first experience I moved on to the
      <a
        className="default-link"
        href="http://www.essex.ac.uk/"
      >
        University of Essex
      </a>
      on 2013 to start a Bsc. Computer Science degree after which I
      completed an MSc. Advanced Web Engineering at the same institution
      culminating my studies in July 2018.
      `,
    `   The undergraduate and postgraduate degrees I obtained at the
      University of Essex provided me with a good understanding of
      fundamental concepts in the IT field and I believe have equipped me
      with valuable software design and development skills across a wide
      range of subjects. I learned these by taking various modules such
      as: Professional development, Object-Oriented programming, Web
      development, Introduction to Databases, Network Fundamentals,
      Software engineering, Application programming, Data structures and
      algorithms, Human computer interfaces and visualisation, Web
      application programming and Advanced programming among others. On my
      final year of undergraduate I worked on a program for the rendering
      of procedurally generated 3D cities using PyOpenGL and for my
      postgraduate dissertation project I developed a web-based IoT fuzzy
      ventilation controller dependent on room temperature and humidity.`,
    ` Along my studies, I found a prime interest in web technologies and
      the possibilities that internet applications offer. I am fascinated
      by the profound impact on society and scale of some of the world
      leading companies in the field e.g. Amazon, Facebook, Google,
      Netflix, etc. and would like to be part of the revolution, and
      perhaps even one day begin my own online business. I have learned
      the importance of frontend interface design and enjoy the process of
      optimising application backends for a scalable performance that
      ensures a pleasant user experience.`,
  ];

  const careerTextArray = [
    `   During my professional career so far I have had the opportunity to
      work at
      <a
        className="default-link"
        href="https://www.tci.net.pe/"
      >
        TCI S.A
      </a>
      as a junior software engineer working mainly with Java utilising the
      Spring boot framework to develop and maintain microservice
      architectured applications. Additionally I employed NodeJS and
      Python in a lesser capacity to develop and maintain scripts to be
      deployed using
      <a
        className="default-link"
        href="https://cloud.google.com/functions"
      >
        GCP Cloud Functions service
      </a>
      , other services I became familiar with are:
      <a
        className="default-link"
        href="https://cloud.google.com/storage"
      >
        GCP Cloud Storage
      </a>
      ,
      <a
        className="default-link"
        href="https://cloud.google.com/logging"
      >
        GCP Cloud Logging
      </a>
      ,
      <a
        className="default-link"
        href="https://cloud.google.com/compute"
      >
        GCP Compute Engine
      </a>
      and
      <a
        className="default-link"
        href="https://cloud.google.com/pubsub"
      >
        GCP Pub/Sub
      </a>
      to name a few.`,
    `In the beginning of 2021 I moved to Rome - Italy to join   <a
        className="default-link"
        href="https://www.atsec.it"
      >
        Atsec information security S.R.L
      </a> as an IT solutions specialist. My main activities are to perform <a
        className="default-link"
        href="https://www.commoncriteriaportal.org/"
      >
        Common Criteria
      </a> compliant security evaluations on a wide range of IT products for our clients which include some of the biggest vendors in the industry e.g. IBM, HP, Huawei,etc. and to participate in the development of software for internal use with  Python and Javascript.`,
  ];

  return (
    <>
      <div className="  bg-[#ffffff] border-t border-gray-900 ">
        <div className="container py-10 px-4 text-justify w-full mx-auto ">
          <h1 className="text-2xl font-semibold text-[#007EA7] ">About me</h1>
          <br />
          <img
            src="/images/profilePic.jpg"
            alt="website profile"
            className="sm:h-[70vh] h-[30vh] sm:float-right sm:ml-4 ml-3 rounded-xl outline-double outline-[#007EA7] hidden sm:inline "
          ></img>
          <p>
            I am a young professional with a passion for web technologies, cloud
            services and information security. Seeking positions that match
            skills &#38; experience, allowing for professional growth and
            impactful contributions to modern software projects. I consider
            myself to be a flexible and adaptable individual who finds joy in
            learning about new cultures, working with people from diverse
            backgrounds and contributing from my own experiences to the
            communities that welcome me.
          </p>
          <br />

          <CollapsableSection title={"Education"} text={educationTextArray} />
          <br />
          <CollapsableSection title={"Career"} text={careerTextArray} />

          <img
            src="/images/profilePic.jpg"
            alt="website profile"
            className="h-[45vh] mx-auto mt-3 rounded-xl outline-double outline-[#007EA7] sm:hidden"
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
