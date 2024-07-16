"use client";

import {
  Comments,
  OverView,
  ProductsList,
  ProductViews,
  ProTips,
  RefundRequest,
  SocialLinks,
} from "@/components";
function Home() {
  return (
    <div
      className="px-10 text-textPrimary overflow-y-scroll h-[calc(100vh-120px)]"
    >
      <h1 className="text-textPrimary text-4xl font-bold mb-6">Dashboard</h1>
      <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]">
        <div className="relative sm:col-span-2 xl:col-span-9 ">
          {/* ------OverView-section------ */}
          <OverView />
          {/* -----Product-views-section---- */}
          <ProductViews />
          {/* -----Product-tips-section---- */}
          <ProTips />
          {/* -----SocialLinks-section---- */}
          <SocialLinks />
        </div>
        <div className="relative sm:col-span-2 md:col-span-2 xl:col-span-6 ">
          {/* ----------ProductsList-------*/}
          <ProductsList />
          {/* ----------Comments-----------*/}
          <Comments />
          {/* ----------RefundRequest------*/}
          <RefundRequest />
        </div>
      </div>
    </div>
  );
}

export default Home;
