import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import blogData from "@/jsondata/blogData.json";
import { useState } from "react";
import Link from "next/link";

export default function Artikel() {
  const [loadMore, setLoadMore] = useState(4);
  return (
    <>
      <Header />
      <>
        {/* Card Blog */}
        <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
              Artikel terbaru tentang layanan kami
            </h2>
            <p className="mt-1 text-gray-600 ">
              Jika Anda tertarik untuk berlangganan artikel kami setiap minggu,
              Anda bisa mengisi formulir langganan dengan cara{" "}
              <Link
                href="/artikel/langganan-artikel"
                className="underline text-blue-500"
              >
                {" "}
                Klik Disini
              </Link>
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
            {blogData.slice(0, loadMore).map(function (value) {
              return (
                <Link
                  className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition  "
                  href={"/artikel/" + value.id}
                  key={value.id}
                >
                  <div className="w-full h-56 overflow-hidden relative">
                    <Image
                      className="w-full object-cover rounded-t-xl"
                      src={value.image}
                      alt="Image Description"
                      fill
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="mt-2 text-xs uppercase text-gray-600 ">
                      {value.penulis}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600  ">
                      {value.judul}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* End Grid */}
          {/* Card */}
          <div className="text-center">
            <div className="inline-block bg-white border shadow-sm rounded-full  ">
              <button
                className="py-3 px-4 flex items-center gap-x-2"
                onClick={() => setLoadMore(loadMore + 4)}
              >
                <div className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                  Muat lebih banyak
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Blog */}
      </>

      <Footer />
    </>
  );
}
