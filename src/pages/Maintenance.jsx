import React from "react";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="max-w-3xl w-full p-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8 sm:p-12 text-center">
            {/* Logo placeholder */}
            <div className="mx-auto w-28 h-28 rounded-full bg-green-600/10 flex items-center justify-center mb-6">
              <svg
                className="w-14 h-14 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 12l2-2 4 4 8-8 4 4v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V12z"
                />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">
              General Enterprises
            </h1>
            <p className="text-slate-500 mb-6">
              Our website is currently under maintenance. We’re working hard to
              bring you a better experience. Thank you for your patience.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <a
                href="mailto:info@generalenterprises.com"
                className="px-5 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-50 transition"
              >
                Contact Support
              </a>
              <a
                href="/"
                className="px-5 py-2 rounded-full bg-green-600 text-white hover:brightness-95 transition"
              >
                Follow Updates
              </a>
            </div> */}

            <div className="text-sm text-slate-500 mb-4">
              Estimated downtime:{" "}
              <strong className="text-slate-700">a few hours</strong>
            </div>

        
            <p className="text-xs text-slate-400 mt-6">
              © {new Date().getFullYear()} General Enterprises. All rights
              reserved.
            </p>
          </div>

          <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 text-xs text-center text-slate-400">
            Plylion Lithium-ion Battery Solutions • Piaggio 3-Wheelers • Eicher TMTL Genset
          </div>
        </div>
      </main>
    </div>
  );
};

export default Maintenance;
