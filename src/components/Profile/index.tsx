"use client";

import React from "react";
import Image from "next/image";
import profile from "../../../public/profile.png";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import ProfileCarousel from "../Carousel";
import HyperStacksLogo from "../../../public/hyperstacks.png";
import PSAX from "../../../public/psax.png";
import LanguagesAndTools from "../LanguagesAndTools";

export default function Profile() {
  const [showMore, setShowMore] = React.useState(false);
  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="lg:w-4/5 flex flex-col justify-evenly pt-40">
      <div className="flex w-full items-center justify-between pb-10">
        <div className="flex-row w-3/5">
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-4xl pb-5">
            Hey! This is
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-5">
            Clevane Villareal
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl pb-5">
            Front-end Developer
          </h1>
          <div className="flex gap-5">
            <LinkedInLogoIcon />
            <GitHubLogoIcon />
          </div>
        </div>
        {/* <Image
          src={profile}
          width={500}
          height={500}
          alt="Picture of the author"
        /> */}
        <div className="h-[500px] w-[500px]" />
      </div>
      <div className="bg-gradient-to-bl from-pink-400 to-red-500 p-3 items-center justify-evenly flex">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl">
            1+
          </h1>
          <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-xl">
            Year Experienced
          </h1>
        </div>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl">
            500+
          </h1>
          <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-xl">
            Live Projects
          </h1>
        </div>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl">
            500+
          </h1>
          <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-xl">
            Live Projects
          </h1>
        </div>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl">
            500+
          </h1>
          <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-xl">
            Live Projects
          </h1>
        </div>
      </div>
      <div className="p-3 items-center flex flex-row pt-10 justify-between">
        <div className="w-3/4 gap-5 flex flex-col">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl underline underline-offset-[12px]">
            About me
          </h1>
          <h1 className="scroll-m-20 tracking-tight text-m text-justify">
            I am Clevane Villareal, I am a recent graduate with a Bachelor of
            Science degree in Computer Engineering from the University of
            Science and Technology of Southern Philippines. My academic journey
            has allowed me to cultivate a broad range of skills, with a distinct
            emphasis on JavaScript/TypeScript. Recognizing the prevailing trends
            in technology, I have strategically chosen to concentrate on these
            areas, particularly their use in constructing resilient frontend
            systems.
          </h1>
          {showMore && (
            <h1 className="scroll-m-20 tracking-tight text-m text-justify">
              As a Frontend Developer, I bring a strong problem-solving skill
              set, coupled with a deep experience in developing both web and
              mobile applications. My expertise lies in using React frameworks,
              which allows me to create efficient and user-friendly interfaces.
              My ability to understand and transform complex problems into
              manageable solutions has been a key to my success in this role.
              This, combined with my passion for coding and design, enables me
              to deliver high-quality, user-centric applications that meet
              business objectives and enhance user experience. I am always eager
              to embrace new challenges and continuously learn to stay at the
              forefront of emerging technologies.
            </h1>
          )}
          <h1
            onClick={handleReadMoreClick}
            className="select-none font-extrabold"
          >
            {showMore ? "Read Less..." : "Read More..."}
          </h1>
        </div>
        <div>
          <Image
            src={profile}
            width={300}
            height={300}
            alt="Picture of the author"
            className="grayscale"
          />
        </div>
      </div>
      <LanguagesAndTools />
      <div className="p-3 items-center flex-col pt-10">
        <div className="flex flex-col w-full mb-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl underline underline-offset-[12px]">
            Experience
          </h1>
        </div>
        <div className="gap-5 flex flex-col">
          <Card>
            <CardHeader className="items-center">
              <Image
                src={HyperStacksLogo}
                alt="Logo"
                width={200}
                height={200}
              />
              <h1 className="scroll-m-20 tracking-tight text-m text-justify font-extrabold">
                Front-end Engineer at HSI Technologies
              </h1>
            </CardHeader>
            <CardContent className="text-justify">
              <h1 className="text-sm">
                I was employed as a Front-end Engineer at HSI Technologies,
                based in Cagayan de Oro, Philippines. In this capacity, I have
                been entrusted with the development of mobile and web
                applications utilizing React frameworks and Node.js. I am
                responsible for the construction and optimization of web
                applications, the maintenance of software workflow with project
                management tools such as Jira, and the design of user
                interfaces. I have also been instrumental in the implementation
                of a monorepo structure at HSI Technologies, which has markedly
                enhanced our codebase management and workflow. Additionally, I
                have experience with version control systems, which has further
                streamlined our development process and fostered collaboration
                among team members.
              </h1>
              <ul className="list-disc p-4 text-sm">
                <li>
                  Developed both Mobile and Web Applications using React
                  Frameworks
                </li>
                <li>
                  Building and Optimizing Web Applications: Developing new
                  user-facing features and building reusable code and libraries
                  for future use. Ensuring the technical feasibility of UI/UX
                  designs and optimizing applications for maximum speed and
                  scalability.
                </li>
                <li>
                  Maintaining Software Workflow: Managing project priorities,
                  deadlines, and deliverables with your team members.
                  Maintaining software workflow management with a project
                  management tool like Jira.
                </li>
                <li>
                  Designing User Interfaces: Collaborating with the design team
                  to define and implement innovative solutions for the product
                  direction, visuals, and experience. Executing all visual
                  design stages from concept to final hand-off to engineering.
                </li>
                <li>
                  Ensuring User Experience: Ensuring a clear user interface and
                  experience. Making sure the web design is optimized for
                  smartphones and other mobile devices.
                </li>
                <li>
                  Teamwork: Actively collaborating with team members,
                  contributing to team projects and utilizing the strengths of
                  each member to achieve common goals.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
              <Image src={PSAX} alt="Logo" width={300} height={300} />
              <h1 className="scroll-m-20 tracking-tight text-m text-justify font-extrabold">
                Intership at Philippines Statistic Office Region X
              </h1>
            </CardHeader>
            <CardContent>
              <h1 className="scroll-m-20 tracking-tight text-m text-justify">
                Before my current role, I undertook an internship at the
                Philippine Statistics Office Region X in Cagayan de Oro,
                Philippines. Here, I served as a Developer and Quality Assurance
                Officer. During this internship, I developed a mobile
                application for inventory management and a Statistical Inter
                Group Classification Code Matching App using Flutter.
              </h1>
              <ul className="list-disc p-4 text-sm">
                <li>
                  Philippine Statistics Authority, Northern Mindanao - mobile
                  application (SIGCCMA System) — Made a mobile Statistical Inter
                  Group Classification Code Matching App. (Flutter)
                </li>
                <li>
                  Philippine Statistics Authority, Northern Mindanao -
                  (Inventory System) — Built a mobile application for requesting
                  and releasing
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
