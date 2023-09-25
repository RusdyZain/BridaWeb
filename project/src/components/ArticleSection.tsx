import React from "react";

export default function ArticleSection() {
  return (
    <div className="bg-slate-50 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Artikel tentang layanan kami
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* text - end */}
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
          {/* article - start */}
          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1511883040705-6011fad9edfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2948&q=80"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">July 19, 2021</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                New trends in Tech
              </h2>
              <span className="font-semibold text-blue-300">Read more</span>
            </div>
          </a>
          {/* article - end */}
          {/* article - start */}
          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1580983559367-0dc2f8934365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJsdWUlMjBzZXJ2aWNlfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60"
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">
                March 15, 2021
              </span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                10 best smartphones for devs
              </h2>
              <span className="font-semibold text-blue-300">Read more</span>
            </div>
          </a>
          {/* article - end */}
          {/* article - start */}
          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1563929826611-57cd84dde938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsdWUlMjBzZXJ2aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent" />
            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">
                April 07, 2021
              </span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                Working with legacy stacks
              </h2>
              <span className="font-semibold text-blue-300">Read more</span>
            </div>
          </a>
          {/* article - end */}
        </div>
      </div>
    </div>
  );
}
