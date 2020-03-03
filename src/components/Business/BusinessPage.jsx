import React, { useEffect } from "react";
import BusinessGallery from "./BusinessGallery";
import { useBusinesses } from "../../customHooks/use-businesses";

function BusinessPage(props) {
  const businesses = useBusinesses();

  return (
    <>
      <h1 className="brand-text text-center">Business</h1>
      <hr />

      {/* <BusinessFilters></BusinessFilters> */}

      <BusinessGallery businesses={businesses}></BusinessGallery>
    </>
  );
}

export default BusinessPage;
