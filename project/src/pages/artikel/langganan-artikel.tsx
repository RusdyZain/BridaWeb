import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { FormEvent, useState } from "react";

type submitDataType = {
  nama_lengkap: string;
  email: string;
};

export default function LanggananArtikel() {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <>
      <Header />
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl ">
              Langganan Artikel
            </h2>
          </div>
          {isSubmit && (
            <div className="bg-blue-50 mt-4 p-3 text-blue-900 text-sm flex gap-2">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
              </svg>
              Kami sudah mengirim konfirmasi ke Email Anda, mohon untuk di cek.
              Terimakasih telah berlangganan
            </div>
          )}

          {/* Card */}
          <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 ">
            <form>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-name-1"
                  className="block mb-2 text-sm font-medium "
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama_lengkap"
                  id="hs-feedback-post-comment-name-1"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4  "
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-email-1"
                  className="block mb-2 text-sm font-medium "
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="hs-feedback-post-comment-email-1"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4  "
                  placeholder="Email address"
                />
              </div>
              <div className="mt-6 grid">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all "
                  onClick={() => setIsSubmit(true)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Comment Form */}

      <Footer />
    </>
  );
}
