import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
//import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold">Solutions</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Digital Strategy & Design</li>
            <li>Application Development</li>
            <li>Cloud & Infrastructure</li>
            <li>Software-as-a-Service</li>
            <li>Digital & Brand Marketing</li>
          </ul>
        </div>
        
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Events</li>
            <li>Why Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Reviews & Awards</li>
          </ul>
        </div>
        
        {/* Contact & Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 bg-gray-800 text-white rounded-md" />
          <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md text-lg text-center">Send</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">&copy; 2025 Finolity | Privacy Policy</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaLinkedin className="text-gray-400 hover:text-white text-xl" />
          <FaGithub className="text-gray-400 hover:text-white text-xl" />
          <FaTwitter className="text-gray-400 hover:text-white text-xl" />
          <FaFacebook className="text-gray-400 hover:text-white text-xl" />
        </div>
      </div>
    </footer>
  );
}
