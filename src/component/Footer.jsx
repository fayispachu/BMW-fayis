function Footer() {
  return (
    <>
      <footer className="bg-[#201f1e] text-gray-200 py-8 md:h-[70vh]">
        <div className="container mx-auto px-4 h-full flex flex-col justify-between">
          {/* <!-- Top Section: About, Links, Contact --> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-full">
            {/* <!-- About Section --> */}
            <div className="flex flex-col justify-center">
              <h3 id="about" className="text-xl font-semibold mb-4">
                About Us
              </h3>
              <p className="text-gray-400">
                We are committed to delivering the best services to our
                customers. Our team is dedicated to ensuring customer
                satisfaction through excellence and innovation.
              </p>
            </div>

            {/* <!-- Quick Links Section --> */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Information Section --> */}
            <div className="flex flex-col justify-center">
              <a href="">
                <h3 id="contact" className="text-xl font-semibold mb-4">
                  Contact Us
                </h3>
              </a>
              <p className="text-gray-400">
                Kannukara
                <br />
                Kozhikode, Vadakara, 673102
              </p>
              <p className="mt-4 text-gray-400">
                Email:{" "}
                <a
                  href="mailto:info@yourwebsite.com"
                  className="hover:text-white"
                >
                  Fayizpachu217@gmail.com
                </a>
              </p>
              <p className="mt-2 text-gray-400">
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-white">
                  +9744850680
                </a>
              </p>
            </div>

            {/* <!-- Social Media Section --> */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* <!-- Facebook --> */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
                {/* <!-- Twitter --> */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.417A9.867 9.867 0 0 1 .964 19.54a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
                  </svg>
                </a>
                {/* <!-- Instagram --> */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.52 2.495 5.787 2.225 7.153 2.163 8.419 2.105 8.799 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.633.394 3.678 1.35 2.723 2.305 2.46 3.447 2.402 4.725 2.344 6.005 2.33 6.414 2.33 12s.014 6.995.072 8.275c.058 1.278.322 2.42 1.278 3.375.956.956 2.098 1.22 3.376 1.278 1.28.058 1.689.072 8.275.072s6.995-.014 8.275-.072c1.278-.058 2.42-.322 3.375-1.278.956-.956 1.22-2.098 1.278-3.376.058-1.28.072-1.689.072-8.275s-.014-6.995-.072-8.275c-.058-1.278-.322-2.42-1.278-3.376-.956-.956-2.098-1.22-3.376-1.278C18.995.014 18.586 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
                {/* <!-- LinkedIn --> */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.065-1.869-3.065-1.872 0-2.157 1.459-2.157 2.961v5.7h-3v-10h2.881v1.366h.041c.402-.764 1.384-1.566 2.846-1.566 3.046 0 3.611 2.006 3.611 4.619v5.583z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Section: Copyright --> */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
