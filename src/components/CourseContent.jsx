import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import { BsDot } from "react-icons/bs";

const contents = [
  {
    title: "Getting Started",
    videoTitle: [
      "Course Introduction",
      "What is Angular?",
      "Getting Started with Angular",
      "Angular Basics",
      "Angular Components",
      "Angular Directives",
      "Angular Services",
      "Angular Routing",
      "Angular Forms",
      "Angular Testing",
      "Angular Deployment",
      "Angular Best Practices",
    ],
  },
  {
    title: "Advanced Angular",
    videoTitle: [
      "Angular Deep Dive",
      "Angular Custom Directives",
      "Angular Custom Components",
      "Angular Custom Pipes",
      "Angular Router Guards",
      "Angular Services Injection",
      "Angular DI Containers",
      "Angular Observable Operators",
      "Angular Interceptors",
      "Angular Security Best Practices",
    ],
  },
  {
    title: "Angular for Enterprise",
    videoTitle: [
      "Angular Architecture",
      "Angular Microservices",
      "Angular CI/CD Pipelines",
      "Angular Performance Tuning",
      "Angular Security Best Practices",
      "Angular Scaling Strategies",
      "Angular Testing Best Practices",
      "Angular Deployment to Production",
      "Angular DevOps Best Practices",
    ],
  },
  {
    title: "Angular Design Patterns",
    videoTitle: [
      "Singleton Pattern",
      "Factory Pattern",
      "Observer Pattern",
      "Command Pattern",
      "Adapter Pattern",
      "Facade Pattern",
      "Proxy Pattern",
      "Decorator Pattern",
      "Builder Pattern",
      "Template Method Pattern",
    ],
  },
  {
    title: "Angular Interview Questions",
    videoTitle: [
      "What is Angular?",
      "What are the benefits of Angular?",
      "What are the different components of Angular?",
      "How do you create an Angular application?",
      "How do you bind data to an Angular component?",
      "How do you create an Angular service?",
      "How do you unit test an Angular application?",
      "How do you deploy an Angular application to production?",
    ],
  },
];

const requirements = [
  "NO Angular 1 or Angular 2+ knowledge is required!",
  "Basic HTML and CSS knowledge helps, but isn't a must-have",
  "Prior TypeScript knowledge also helps but isn't necessary to benefit from this course",
  "Basic JavaScript knowledge is required",
];

const CourseContent = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold">Course content</h4>
      <div className="flex items-center text-gray-600 text-sm">
        34 section <BsDot /> 499 lectures <BsDot /> 36h 30m total length
      </div>
      <div>
        <Accordion allowMultiple>
          <AccordionItem
            header={
              <div className={`border w-full border-gray-400`}>
                <p>This is header</p>
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionItem>

          <AccordionItem header="Where does it come from?">
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
            accumsan auctor mi.
          </AccordionItem>

          <AccordionItem header="Why do we use it?">
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
      {/* Requirements */}
      <div>
        <h4 className="text-2xl font-bold py-4">Requirements</h4>
        <ul className="list-disc px-5 text-sm text-gray-600 leading-loose">
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>
      {/* Description */}
      <div>
        <h4 className="text-2xl font-bold py-4">Description</h4>
        <p></p>
      </div>
    </div>
  );
};

export default CourseContent;
