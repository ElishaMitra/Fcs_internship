export default function HeroSection() {
  return (
    <section className="w-full">
      {/* Statistics Section */}
      
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-6 text-left py-8 px-4">
        <div className="flex flex-col items-left">
          <p className="text-gray-400 font-semibold">REVIEWED ON</p>
          <div className="flex items-left space-x-2">
            <span className="text-xl font-bold text-white">Clutch</span>
            <span className="text-red-500 text-lg">★★★★★</span>
          </div>
          <p className="text-gray-300">2K+ REVIEWS</p>
        </div>
        
        <StatBox number="08"  label="Years" subtext="Proven Track Record" />
        <StatBox number="98%" label="Customer Satisfaction" />
        <StatBox number="470+" label="Projects" subtext="We Have Completed" />
        <StatBox number="3 Mins" label="Average Answer Time" />
        
      </div>

      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-8 text-left relative">
        <p className="text-yellow-500 uppercase font-semibold mb-4">What We Do</p>
        <h2 className="text-4xl md:text-5xl font-bold">Simplifying IT <br /> for a complex world.</h2>
        <div className="absolute bottom-4 right-10 opacity-50">
          <DiamondPattern />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center py-12 px-6">
        <FeatureCard
          icon="💲"
          title="Cost-effectiveness"
          text="We offer affordable IT solutions that help you reduce costs and improve your bottom line."
        />
        <FeatureCard
          icon="💡"
          title="Innovative Technology"
          text="We stay up-to-date with the latest technology trends and offer innovative solutions to help you stay ahead of the competition."
        />
        <FeatureCard
          icon="📖"
          title="Industry Expertise"
          text="We specialize in serving specific industries such as healthcare, finance, or manufacturing, offering tailored solutions."
        />
        <FeatureCard
          icon="🚀"
          title="Scalability"
          text="Our solutions are scalable and grow with your business, ensuring maximum value from your investment."
        />
      </div>
    </section>
  );
}

/* Stats Box Component */
const StatBox = ({ number, label, subtext }) => (
  <div className="flex flex-col items-center">
    <p className="text-3xl font-bold text-white">{number}</p>
    <p className="text-gray-400 font-semibold">{label}</p>
    {subtext && <p className="text-gray-200">{subtext}</p>}
  </div>
);

/* Feature Card Component */
const FeatureCard = ({ icon, title, text }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl">{icon}</div>
    <h3 className="text-lg font-semibold mt-4">{title}</h3>
    <p className="text-gray-500 mt-2">{text}</p>
  </div>
);

/* Diamond Pattern (SVG) */
const DiamondPattern = () => (
  <svg width="100" height="300" viewBox="0 0 100 100" fill="none">
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => (
        <rect
          key={`${row}-${col}`}
          x={col * 20}
          y={row * 20}
          width="8"
          height="8"
          transform="rotate(45)"
          fill="white"
          opacity="0.7"
        />
      ))
    )}
  </svg>
);

