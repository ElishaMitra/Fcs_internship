import company from "../assets/company.png"
export default function RecognitionSection() {
    return (
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-12 bg-white">
        {/* Left Section - Text Content */}
        <div className="md:w-1/3 text-left">
          <span className="text-xs font-semibold text-gray-500 px-2 py-1 bg-gray-100 rounded-md">
            WHERE WE DO
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            Recognized by the best
          </h2>
          <p className="text-gray-600 mt-3">
            The company needed to complete a complex migration on a tight deadline 
            to avoid millions of dollars in post-contract fees and fines.
          </p>
        </div>
  
        {/* Right Section - Logos */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 md:mt-0">
          <img src={company} alt=""  />
      
        </div>
      </div>
    );
  }
  