import React from "react";

export default function HeroSection() {
  return (
    <div className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-blue-300 to-sky-500 blur-3xl opacity-50 "
      />
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl ">
            Build in your way but with our experts{" "}
            <span className="text-primary ">Support.</span>
          </h1>
          <p className="mt-8 text-gray-600 ">
            Odio incidunt nam itaque sed eius modi error totam sit illum.
            Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis
            beatae ipsum soluta!
          </p>
          <div className="mt-7">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-sky-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2  py-3 px-6  transition-all"
              href="#"
            >
              Lihat Layanan
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
          <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale ">
            <img
              src="https://tailus.io/sources/blocks/sass/preview/images/clients/airbnb.svg"
              className="h-8 sm:h-10 w-auto lg:h-12"
              alt=""
            />
            <img
              src="https://tailus.io/sources/blocks/sass/preview/images/clients/ge.svg"
              className="h-8 sm:h-10 w-auto lg:h-12"
              alt=""
            />
            <img
              src="https://tailus.io/sources/blocks/sass/preview/images/clients/coty.svg"
              className="h-8 sm:h-10 w-auto lg:h-12"
              alt=""
            />
            <img
              src="https://tailus.io/sources/blocks/sass/preview/images/clients/microsoft.svg"
              className="h-8 sm:h-10 w-auto lg:h-12"
              alt=""
            />
          </div>
        </div>
        <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
          <img
            src="https://tailus.io/sources/blocks/sass/preview/images/project.svg"
            alt="project illustration"
            height=""
            width=""
          />
        </div>
      </div>
    </div>
  );
}
