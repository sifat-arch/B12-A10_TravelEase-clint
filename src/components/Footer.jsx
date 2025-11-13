import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black  text-white rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">All Vehicles</a>
        <a className="link link-hover">Bookings</a>
        <a className="link link-hover">My Vehicles</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              aria-hidden="true"
            >
              <title>X logo</title>
              <path d="M4.1 3.6c0.3-0.9 1.2-1.5 2.1-1.3 0.6 0.2 1.1 0.6 1.6 1.1L12 7.9l4.2-4.5c0.5-0.5 1.1-0.9 1.8-1.1 0.9-0.2 1.8 0.4 2.1 1.3 0.3 0.9-0.0 1.9-0.8 2.5L15.7 12l4.6 4.2c0.8 0.6 1.1 1.6 0.8 2.5-0.3 0.9-1.2 1.5-2.1 1.3-0.7-0.2-1.3-0.6-1.8-1.1L12 16.1l-4.2 4.5c-0.5 0.5-1.1 0.9-1.8 1.1-0.9 0.2-1.8-0.4-2.1-1.3-0.3-0.9 0.0-1.9 0.8-2.5L8.3 12 3.7 7.8C2.9 7.2 2.6 6.2 2.9 5.3z" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Premium
          Rental Car Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
