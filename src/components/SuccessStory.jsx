import { successImage } from "../constants/index.jsx";
import userImage from "../assets/profile-pictures/user2.jpg";
import video from "../assets/video1.mp4"
export default function SuccessStories() {
  return (
    <div className="bg-gray-800 text-white py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Success Stories</h2>

      {/* Success Stories Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {successImage.map((image, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-xl shadow-lg">
            <img
              src={image}
              alt={`Success Story ${i + 1}`}
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            {i === 0 && (
              <>
                <p className="text-sm text-gray-400">
                  CASE STUDIES, DIGITAL TRANSFORMATION, IT CONSULTING
                </p>
                <h3 className="text-lg font-semibold">
                  How Finolity’s Consultation Revolutionized Unacademy’s Success
                </h3>
              </>
            )}
            {i === 1 && (
              <>
                <p className="text-sm text-gray-400">CLOUD HOSTING</p>
                <h3 className="text-lg font-semibold">
                  Finolity boosts MM Deemed University with SOLIDWORKS, Smart
                  Manufacturing Lab.
                </h3>
              </>
            )}
            {i === 2 && (
              <>
                <p className="text-sm text-gray-400">IT CONSULTING</p>
                <h3 className="text-lg font-semibold">
                  "Unlocking Success: The Crucial Role of Design in the Digital
                  Era with Finolity"
                </h3>
              </>
            )}
            <a href="#" className="text-blue-400 mt-2 inline-block hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-6 w-full px-4">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
        <video controls className="w-full h-full rounded-lg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

        {/* Right Section */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start bg-gray-900 text-white p-6 rounded-lg shadow-lg">
          <img
            src={userImage}
            className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover border-2 border-gray-700 shadow-md"
            alt="User Image"
          />

          <div className="ml-4 flex-1">
            <p className="text-gray-300 text-lg leading-relaxed">
              "Finolity implemented such a powerful platform that we had no break in
              service when our employees had to work from home due to the COVID-19
              pandemic."
            </p>

            <div className="mt-4">
              <p className="font-semibold">Prakash Kashyap</p>
              <p className="text-gray-400 text-sm">Director, XYZ Pvt. Ltd.</p>
            </div>

            <div className="flex items-center mt-4 space-x-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <p className="text-gray-400">Clutch - 2k+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
