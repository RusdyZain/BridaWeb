import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

import dataLayanan from "@/jsondata/dataLayanan.json";
import CardLayanan from "@/components/page-layanan/CardLayanan";

export type SelectedType = {
  nama: string;
  harga: string;
};

export default function PesanLayanan() {
  const [selected, setSelected] = useState<SelectedType[]>([]);
  return (
    <>
      <Header />
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Pesan Layanan
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            quasi, dolorem, itaque saepe corrupti explicabo velit error iure nam
            quam expedita ullam odio.
          </p>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {dataLayanan.map((value) => (
            <CardLayanan
              data={value}
              key={value.id}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        {/* End Grid */}
        <div className="flex flex-col items-center mt-10 w-full">
          {/* Invoice */}
          <div className="w-6/12">
            {/* Table */}
            <div className="border border-gray-200 p-4 rounded-lg space-y-4 ">
              <div className="hidden sm:grid sm:grid-cols-4">
                <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                  Layanan
                </div>
                <div className="text-left text-xs font-medium text-gray-500 uppercase">
                  Jumlah
                </div>
                <div className="text-right text-xs font-medium text-gray-500 uppercase">
                  Harga
                </div>
              </div>
              <div className="hidden sm:block border-b border-gray-200 " />
              {selected.map((value, index) => (
                <div key={index}>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Item
                      </h5>
                      <p className="font-medium text-gray-800 ">{value.nama}</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </h5>
                      <p className="text-gray-800 ">1</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </h5>
                      <p className="sm:text-right text-gray-800 ">
                        Rp.{value.harga}
                      </p>
                    </div>
                  </div>
                  <div className="sm:hidden border-b border-gray-200 " />
                </div>
              ))}
            </div>
            {/* End Table */}
            {/* Grid */}
            <div className="mt-5 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 ">
                  Pesanan
                </h2>
              </div>
              {/* Col */}
              <div className="inline-flex gap-x-2">
                <a
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm "
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  Download Invoice
                </a>
                <a
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                  href="#"
                >
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path
                      fill="currentColor"
                      d="M4 9a1 1 0 011-1h4a1 1 0 010 2H5a1 1 0 01-1-1z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M4 3a4 4 0 00-4 4v10a4 4 0 004 4h16a4 4 0 004-4V7a4 4 0 00-4-4H4zm16 2H4a2 2 0 00-2 2v7h20V7a2 2 0 00-2-2zm2 11H2v1a2 2 0 002 2h16a2 2 0 002-2v-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Bayar Pesanan
                </a>
              </div>
              {/* Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Invoice */}
        </div>
      </div>
      <Footer />
    </>
  );
}
