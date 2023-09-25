import React from "react";

// export default function TeamSection() {
//   return (
//     <div className="bg-white py-6 sm:py-8 lg:py-12">
//       <div className="mx-auto max-w-7xl px-4 md:px-8">
//         {/* text - start */}
//         <div className="mb-10 md:mb-16">
//           <h2 className="mb-4 text-center text-2xl font-bold text-slate-800 md:mb-6 lg:text-3xl">
//             Tim Servind
//           </h2>
//           <p className="mx-auto max-w-screen-md text-center text-slate-500 md:text-lg">
//             This is a section of some simple filler text, also known as
//             placeholder text. It shares some characteristics of a real written
//             text but is random or otherwise generated.
//           </p>
//         </div>
//         {/* text - end */}
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by Radu Florin"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 John McCulling
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 Founder / CEO
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by christian ferrer"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 Kate Berg
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 CFO
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by Ayo Ogunseinde"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 Greg Jackson
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 CTO
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by Midas Hofstra"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 Robert Greyson
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 Creative Director
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by Elizeu Dias"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 John Roberts
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 Investor Relations
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by Matheus Ferrero"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 Judy Amandez
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 Senior Art Director
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by Leilani Angel"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 Rahul Williams
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 Creative Director
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//           {/* person - start */}
//           <div className="flex flex-col items-center rounded-lg bg-slate-100 p-4 lg:p-8">
//             <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-slate-200 shadow-lg md:mb-4 md:h-32 md:w-32">
//               <img
//                 src="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256"
//                 loading="lazy"
//                 alt="Photo by Jernej Graj"
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <div className="text-center font-bold text-blue-500 md:text-lg">
//                 Ari Ferris
//               </div>
//               <p className="mb-3 text-center text-sm text-slate-500 md:mb-4 md:text-base">
//                 Marketing Analyst
//               </p>
//               {/* social - start */}
//               <div className="flex justify-center">
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="#"
//                     target="_blank"
//                     className="text-slate-400 transition duration-100 hover:text-slate-500 active:text-slate-600"
//                   >
//                     <svg
//                       className="h-5 w-5"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               {/* social - end */}
//             </div>
//           </div>
//           {/* person - end */}
//         </div>
//       </div>
//     </div>
//   );
// }
export default function TeamSection() {
  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-gray-600">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
          Tim Servind
        </h2>
        <p className="mt-1 text-gray-600 ">Creative people</p>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-9">
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">David Forren</h3>
            <p className="text-sm text-gray-600 ">Founder / CEO</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Amil Evara</h3>
            <p className="text-sm text-gray-600 ">UI/UX Designer</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Ebele Egbuna</h3>
            <p className="text-sm text-gray-600 ">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Maria Powers</h3>
            <p className="text-sm text-gray-600 ">Director of sales</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Delia Pawelke</h3>
            <p className="text-sm text-gray-600 ">Front-end Developer</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Tom Lowry</h3>
            <p className="text-sm text-gray-600 ">UI/UX Designer</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Louise Donadieu</h3>
            <p className="text-sm text-gray-600 ">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Jeff Fisher</h3>
            <p className="text-sm text-gray-600 ">Project Manager</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Sophia Harrington</h3>
            <p className="text-sm text-gray-600 ">Project Manager</p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center border p-4 rounded-md">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">Christina Kray</h3>
            <p className="text-sm text-gray-600 ">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
