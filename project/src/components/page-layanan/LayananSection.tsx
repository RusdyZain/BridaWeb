import Link from "next/link";
import React from "react";
import dataLayanan from "@/jsondata/dataLayanan.json";

export default function LayananSection() {
  return (
    <div className="max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <header className="mb-10 flex flex-col items-center">
        <p className="mb-2 text-sm font-semibold text-blue-600">
          LAYANAN SERVIND
        </p>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl ">
          Berikut layanan yang kami tawarkan
        </h1>
        <p className="mt-2 text-lg text-gray-800 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          inventore error eveniet ullam provident.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
        {dataLayanan.map((value) => (
          <Link
            className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all border"
            href={`/layanan/${value.id}`}
            key={value.id}
          >
            <svg
              className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 "
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
            </svg>
            <div>
              <div>
                <h3 className="block font-bold text-gray-800 ">{value.nama}</h3>
                <p className="text-gray-600 ">{value.deskripsi_singkat}</p>
              </div>
              <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
                Lebih Lengkap
                <svg
                  className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <div className="inline-block bg-white border shadow-sm rounded-full ">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 ">Tertarik ?</p>
            <Link
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              href="/layanan/pesan-layanan"
            >
              Pesan Layanan
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
