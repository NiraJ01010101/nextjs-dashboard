"use client";
import { HiOutlineReceiptRefund } from "react-icons/hi";

function RefundRequest() {
  return (
    <>
      <div className="p-4 bg-backgroundPrimary rounded-md mt-3">
        <h2 className="text-textPrimary text-2xl font-bold">
          <span className="bg-accent2 w-3 h-7 rounded inline-flex items-center align-middle me-4"></span>
          Refund Requests
        </h2>

        <div className="flex justify-center gap-4 md:mt-8 mt-3">
          <div className="w-1/12">
            <div className="flex items-center justify-center bg-accent2 rounded-full size-10">
              <HiOutlineReceiptRefund />
            </div>
          </div>
          <div className="w-11/12">
            <p className="text-textSecondary flex">You have</p>
            <span className="text-textPrimary font-semibold">
              52 open refund requests
            </span>
            to action. This includes{" "}
            <span className="text-textPrimary font-semibold">
              8 new requests.
            </span>
            👀
          </div>
        </div>
        <button
          type="button"
          className="w-full text-center border border-textSecondary p-3 rounded-xl mt-5"
        >
          Review refund requests
        </button>
      </div>
    </>
  );
}

export default RefundRequest;
