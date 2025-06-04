import React from "react";

const features = [
  {
    id: "01",
    icon: "L1.png",
    title: "User-Friendly Interface",
    description:
      "Our platform offers seamless task management to boost your efficiency.",
  },
  {
    id: "02",
    icon: "L2.png",
    title: "Collaborate & Share Effortlessly",
    description:
      "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: "03",
    icon: "L3.png",
    title: "Effortless Collaboration",
    description:
      "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: "04",
    icon: "L4.png",
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
  },
];

const Process = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20 font-roboto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1744] mb-16">
        Transform Your Productivity with Our
        <br />
        Innovative To-Do List Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#f9f9f9] rounded-xl shadow-sm p-8 text-left relative h-auto flex flex-col justify-between"
          >
            <div>
              <div className="bg-white rounded-lg inline-flex p-4 shadow-sm mb-6">
                <img
                  src={`/images/${feature.icon}`}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="absolute top-8 right-8 text-gray-200 font-bold text-4xl">
                {feature.id}
              </div>

              <h3 className="font-bold text-[#0a1744] text-xl mb-3">
                {feature.title}
              </h3>

              <div className="flex space-x-1 mb-5">
                <span className="w-10 h-1.5 bg-red-500 rounded-full"></span>
                <span className="w-2 h-1.5 bg-red-500 rounded-full"></span>
              </div>
            </div>

            <p className="text-gray-700 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
