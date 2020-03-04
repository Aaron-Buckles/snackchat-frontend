import React from "react";
import BusinessGallery from "./BusinessGallery";

// Hooks
import { useBusinesses } from "../../customHooks/use-businesses";

export default function BusinessPage() {
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
