import React from "react";

export default function AboutSection() {
  const stats = [
    { title: "30+", description: "Projects Completed" },
    { title: "5+", description: "Expert Team Members" },
    { title: "10+", description: "Industries Served" },
    { title: "100%", description: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          About <span className="text-blue-600">Design Technix</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Design Technix is a pioneering startup specializing in Smart Factory and Industry 4.0 solutions.
              With a team of expert engineers and cutting-edge technology, we are transforming industrial
              processes across India and beyond.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From concept to commissioning, our comprehensive range of services ensures that your industrial 
              operations remain at the forefront of technological innovation.
            </p>
          </div>

          {/* Right Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-blue-600"
              >
                <h3 className="text-3xl font-bold text-blue-600">{stat.title}</h3>
                <p className="text-gray-700 text-lg mt-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
