import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dataLayanan from "@/jsondata/dataLayanan.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

type dataType = (typeof dataLayanan)[0];

export default function DetailLayanan() {
  const [data, setData] = useState<dataType>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const theData = dataLayanan.find((value) => value.id === router.query.id);
      setData(theData);
    }
  }, [router]);

  return (
    <>
      <Header />
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <figure>
              <div className="relative w-full h-96">
                <Image
                  className="w-full object-cover rounded-xl"
                  src={data ? data.image_url : "/next.svg"}
                  alt="Image Description"
                  fill
                />
              </div>
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                {data?.nama}
              </figcaption>
            </figure>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl ">{data?.nama}</h2>
              <p className="text-lg text-gray-800 ">{data?.deskripsi}</p>
            </div>
            <h2 className="text-2xl font-bold md:text-3xl ">
              Keuntungan yang Anda dapatkan jika memilih layanan ini:
            </h2>
            <ol className="list-decimal pl-5">
              {data?.kelebihan.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ol>
          </div>
          {/* End Content */}
        </div>
      </div>
      <Footer />
    </>
  );
}
