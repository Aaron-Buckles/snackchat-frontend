import { useState, useEffect } from "react";
import { usePosition } from "./use-position";
import businessService from "../services/businessService";

export const useBusinesses = (withinRadius = true) => {
  const { latitude, longitude, error: positionError } = usePosition();
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      if (latitude && longitude && !positionError && withinRadius) {
        setBusinesses(
          await businessService.getBusinessWithinRadius(longitude, latitude)
        );
      } else {
        setBusinesses(await businessService.getBusinesses());
      }
    };
    fetchBusinesses();
  }, []);

  return businesses;
};
