import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Responsive Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section */}
          <div className="text-gray-700 space-y-4">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="Tripkolic Logo" className="h-8 w-auto" />
              </a>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Gravdio elit
              aliquam hendrerit dapibus diam velit non habitant potenti?
            </p>
          </div>

          {/* Center Section */}
          <div className="space-y-4">
            <h5 className="font-bold text-gray-600">About tripkolic</h5>
            <ul className="space-y-2 text-gray-500">
              <li>About us</li>
              <li>Newsroom</li>
              <li>tripkolic Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <h5 className="font-bold text-gray-600">Partnership</h5>
            <ul className="space-y-2 text-gray-500">
              <li>Merchant sign up</li>
              <li>Merchant log in</li>
              <li>Affiliate Partnership</li>
              <li>Influencer Program</li>
            </ul>
          </div>

          {/* Terms Section */}
          <div className="space-y-4">
            <h5 className="font-bold text-gray-600">Term of use</h5>
            <ul className="space-y-2 text-gray-500">
              <li>General terms of use</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
              <li>Bug Bounty Program</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="container mx-auto px-4 mt-8 text-center text-gray-500">
        © 2024 Tripkolic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
