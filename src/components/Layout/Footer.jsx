import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-layout shadow mt-8">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="m-6 columns-2 flex justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <Link
              to="/contact"
              className="text-sm m-8 leading-6 text-main hover:text-gray-900"
            >
              Contact
            </Link>
          </div>

          <div className="pb-6">
            <Link
              to="/products"
              className="text-sm m-8 leading-6 text-main hover:text-gray-900"
            >
              Products
            </Link>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-main">
          &copy; 2023 Lisa Grant, Inc. All rights reserved.
        </p>
        <p className="mt-10 text-center text-xs leading-5 text-main">
          All images are from Unsplash.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
