const solutions = [
    {
      title: "Managed Services",
      description:
        "Free up your internal resources to focus on the business by letting us handle day-to-day support services, management, and monitoring of your IT.",
      icon: "🛠️", // Replace with an actual icon or SVG
      color: "text-blue-400",
    },
    {
      title: "IT Consulting & Advisory",
      description:
        "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.",
      icon: "👥",
      color: "text-blue-400",
    },
    {
      title: "Cyber Security",
      description:
        "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
      icon: "🛡️",
      color: "text-blue-400",
    },
    {
      title: "Web Development",
      description:
        "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
      icon: "💻",
      color: "text-blue-400",
    },
    {
      title: "Mobile Development",
      description:
        "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
      icon: "📱",
      color: "text-blue-400",
    },
    {
      title: "Cloud Services",
      description:
        "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
      icon: "☁️",
      color: "text-blue-400",
    },
  ];
  
  const SolutionSection = () => {
    return (
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-yellow-400 text-lg font-semibold uppercase">How We Do</h2>
          <h1 className="text-4xl font-bold text-white mb-10">Solutions</h1>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow-md rounded-lg p-6 transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className={`text-4xl ${solution.color} mb-4`}>{solution.icon}</div>
                <h3 className={`text-xl font-semibold ${solution.color}`}>
                  {solution.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{solution.description}</p>
                <button className="mt-4 text-yellow-400 font-semibold hover:underline">
                  Learn more
                </button>
              </div>
            ))}
          </div>
  
          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-gray-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300">
              View All Solutions
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default SolutionSection;
  