import dataLayanan from "@/jsondata/dataLayanan.json";
import { Dispatch, SetStateAction, useState } from "react";
import { SelectedType } from "@/pages/layanan/pesan-layanan";

type PropsType = {
  data: (typeof dataLayanan)[0];
  selected: SelectedType[];
  setSelected: Dispatch<SetStateAction<SelectedType[]>>;
};

export default function CardLayanan({
  data,
  setSelected,
  selected,
}: PropsType) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={`group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl `}
      key={data.id}
    >
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 ">
          Layanan
        </span>
        <h3 className="text-xl font-semibold text-gray-800 ">{data.nama}</h3>
        <p className="mt-3 text-gray-500">{data.deskripsi_singkat}</p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 ">
        <div className="w-full py-3 px-4 flex justify-center items-center gap-2 rounded-bl-xl shadow-sm align-middle hover:bg-gray-50 text-base font-bold">
          {isSelected ? (
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-6 h-6 text-green-400"
            >
              <path d="M8.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L2.324 8.384a.75.75 0 111.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 01.02-.022zm-.92 5.14l.92.92a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 10-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
            </svg>
          ) : (
            ""
          )}
          Rp.{data.harga}
        </div>
        <button
          className={` ${
            isSelected ? "bg-red-300" : "bg-white"
          } w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium text-gray-700 shadow-sm align-middle ${
            isSelected ? "hover:bg-red-400" : "hover:bg-gray-50"
          } text-sm sm:p-4 `}
          onClick={() => {
            setIsSelected(!isSelected);
            if (isSelected) {
              const selectedData = [...selected];
              const hasil = selectedData.filter(
                (value) => value.nama !== data.nama
              );
              setSelected(hasil);
            } else {
              const selectedData = [...selected];
              selectedData.push(data);
              setSelected(selectedData);
            }
          }}
        >
          {isSelected ? "Batalkan" : "Pilih"}
        </button>
      </div>
    </div>
  );
}
