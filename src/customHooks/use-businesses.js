import { useState, useEffect, useCallback } from "react";
import { usePosition } from "./use-position";

// Services
import businessService from "../services/businessService";

export const useBusinesses = (withinRadius = 0) => {
  const { latitude, longitude, error: positionError } = usePosition();
  const [list, setList] = useState([]);

  const fetch = useCallback(() => {
    if (latitude && longitude && !positionError && withinRadius) {
      return businessService
        .getBusinessWithinRadius(latitude, longitude, withinRadius)
        .then(businesses => setList(businesses));
    } else if (!withinRadius) {
      return businessService
        .getBusinesses()
        .then(businesses => setList(businesses));
    } else {
      setList([]);
    }
  }, [latitude, longitude, withinRadius]);

  useEffect(() => {
    fetch();
  }, [latitude, longitude, withinRadius]);

  const create = businessService.createBusiness;
  return { list, fetch, create };
};
