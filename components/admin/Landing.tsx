import { useState } from "react";
import { DUMMY_PRODUCTS_INFO } from "./DummyProductDetails";
import Image from "next/image";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

const Landing = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-xl mb-2 mx-auto text-center">Products list</h1>
      <div className="flex justify-between items-center mx-auto my-4 w-10/12">
        <Search />
        <button
          className="btn bg-white text-gray-500"
          onClick={() => setOpen(true)}
        >
          +
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="mx-auro w-56">
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">
              Add new product
            </h3>
            <p className="text-sm text-gray-500">Please add a new product</p>
          </div>
          <div className="flex gap-4">
            <button
              className="btn w-full text-white bg-red-600 shadow-red-400/40"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="btn w-full  bg-white text-gray-500"
              onClick={() => setOpen(false)}
            >
              Add
            </button>
          </div>
        </div>
      </Modal>

      <div className="overflow-auto rounded-lg shadow hidden md:block w-10/12 m-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                No.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Description
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Image
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Day
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Week
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700 text-sm font-light">
            {DUMMY_PRODUCTS_INFO.map((item) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                key={item.id}
              >
                <td className="p-3 text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    {item.id}
                  </a>
                </td>
                <td className="p-3 whitespace-nowrap font-medium">
                  {item.productName}
                </td>
                <td className="p-3 whitespace-wrap">
                  {item.productDescription}
                </td>
                <td className="p-3  w-1/6">
                  <Image
                    src={item.imgSrc}
                    alt={item.productName}
                    className="object-fill"
                    width={100}
                    height={100}
                  />
                </td>
                <td className="p-3 whitespace-nowrap">{item.pricePerDay}</td>
                <td className="p-3 whitespace-nowrap">{item.pricePerWeek}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-yellow-600 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-yellow-600  hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-yellow-600  hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {DUMMY_PRODUCTS_INFO.map((item) => (
          <div
            className="bg-white space-y-3 p-4 rounded-lg shadow border mx-2"
            key={item.id}
          >
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  {item.id}
                </a>
              </div>
              <div className="text-sm text-gray-700">{item.productName}</div>
            </div>
            <div className="text-gray-500">{item.productDescription}</div>
            <div className="text-sm font-medium text-black">
              Day: {item.pricePerDay}
            </div>
            <div className="text-sm font-medium text-black">
              Week: {item.pricePerWeek}
            </div>
            <hr></hr>
            <div className="flex item-center justify-center">
              <div className="w-6 mr-2 transform hover:text-yellow-600 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div className="w-6 mr-2 transform hover:text-yellow-600  hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="w-6 mr-2 transform hover:text-yellow-600  hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Landing;
