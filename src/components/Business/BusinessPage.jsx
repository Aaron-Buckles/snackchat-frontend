import React, { useEffect } from "react";
import businessService from "../../services/businessService";

import BusinessGallery from "./BusinessGallery";

import { useState } from "react";

import { usePosition } from "../../customHooks/use-position";

function BusinessPage(props) {
  const { latitude, longitude, error } = usePosition();

  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (latitude && longitude && !error) {
        setBusinesses(
          await businessService.getBusinessWithinRadius(longitude, latitude)
        );
      } else {
        setBusinesses(await businessService.getBusinesses());
      }
    };
    fetchData();
  }, [latitude, longitude]);

  return (
    <>
      <h1 className="brand-text text-center">Business</h1>
      <hr />

      {/* <BusinessFilters></BusinessFilters> */}

      <BusinessGallery {...props} businesses={businesses}></BusinessGallery>
    </>
  );
}

export default BusinessPage;
