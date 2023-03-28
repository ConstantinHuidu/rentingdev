import React, { useEffect, useState } from "react";

export type toasterStatus = "success" | "error" | "warning" | "info";

type MasterToasterProps = {
  status: toasterStatus;
  message: string;
};

type ToasterProps = {
  message: string;
  onHandleClick: () => void;
};

const SuccessToaster = ({ message, onHandleClick }: ToasterProps) => (
  <div
    onClick={onHandleClick}
    id="toast-success"
    className="absolute bottom-3 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-green-50 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Check icon</span>
    </div>
    <div className="ml-3 text-sm font-normal">{message}</div>
    <button
      type="button"
      className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-green-50 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-success"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
);

const ErrorToaster = ({ message, onHandleClick }: ToasterProps) => (
  <div
    onClick={onHandleClick}
    id="toast-danger"
    className="absolute bottom-3 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-red-50 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Error icon</span>
    </div>
    <div className="ml-3 text-sm font-normal">{message}</div>
    <button
      type="button"
      className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-red-50 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-danger"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
);

const WarningToaster = ({ message, onHandleClick }: ToasterProps) => (
  <div
    onClick={onHandleClick}
    id="toast-warning"
    className="absolute bottom-3 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-orange-50 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-800 dark:text-orange-200">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Warning icon</span>
    </div>
    <div className="ml-3 text-sm font-normal">{message}</div>
    <button
      type="button"
      className="ml-auto -mx-1.5 -my-1.5 bg-orange-50 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-orange-50 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-danger"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
);

const Toaster = ({ status, message }: MasterToasterProps) => {
  const [showToaster, setShowToaster] = useState(false);
  const toasterTimeout = status === "error" ? 6000 : 3000;

  useEffect(() => {
    setShowToaster(true);
    setTimeout(() => setShowToaster(false), toasterTimeout);
  }, []);

  const handleCloseModal = () => {
    setShowToaster(false);
  };

  return (
    <>
      {status === "success" && showToaster && (
        <SuccessToaster message={message} onHandleClick={handleCloseModal} />
      )}
      {status === "error" && showToaster && (
        <ErrorToaster message={message} onHandleClick={handleCloseModal} />
      )}
      {status === "warning" && showToaster && (
        <WarningToaster message={message} onHandleClick={handleCloseModal} />
      )}
    </>
  );
};

export default Toaster;