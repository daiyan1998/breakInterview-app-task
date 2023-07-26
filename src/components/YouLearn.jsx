import { AiOutlineCheck } from "react-icons/ai";

const txts = [
  {
    paragraph:
      "Develop modern, complex, responsive and scalable web applications with Angular",
  },
  {
    paragraph:
      "Fully understand the architecture behind an Angular application and how to use it",
  },
  {
    paragraph:
      "Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer",
  },
  {
    paragraph:
      "Create single-page applications with one of the most modern JavaScript frameworks out there",
  },
];

const YouLearn = () => {
  return (
    <div className="p-5 border border-gray-500 my-6">
      <h3 className="text-2xl font-bold mb-4">What you&apos;ll learn</h3>
      <div className="grid grid-cols-2 gap-2">
        {txts.map(({ paragraph }) => (
          <div
            key={paragraph}
            className="flex items-start gap-3 text-sm text-gray-700"
          >
            <AiOutlineCheck className="text-2xl" />
            <span>{paragraph}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouLearn;
