import React from "react";
import BusinessGallery from "./BusinessGallery";

// Interface
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { useBusinesses } from "../../customHooks/use-businesses";

export default function BusinessPage() {
  const businesses = useBusinesses();

  return (
    <>
      <h1 className="brand-text text-center">
        <FontAwesomeIcon icon="building" /> Business
      </h1>
      <hr />

      {/* <BusinessFilters></BusinessFilters> */}

      <BusinessGallery businesses={businesses}></BusinessGallery>
    </>
  );
}
