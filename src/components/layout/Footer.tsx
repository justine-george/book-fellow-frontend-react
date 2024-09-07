export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-200 py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="mb-4 md:mb-0">
          &copy; 2024 Book Fellow. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="hover:text-white focus:text-white underline-offset-4 hover:underline focus:underline transition-colors duration-200"
                aria-label="About Book Fellow"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white focus:text-white underline-offset-4 hover:underline focus:underline transition-colors duration-200"
                aria-label="Privacy Policy"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white focus:text-white underline-offset-4 hover:underline focus:underline transition-colors duration-200"
                aria-label="Terms of Service"
              >
                Terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
