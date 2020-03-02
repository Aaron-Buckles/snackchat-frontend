import { useState } from "react";

export const useSubmit = submitFunction => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const exec = async event => {
    try {
      setLoading(true);
      setError(null);
      await submitFunction(event);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { exec, loading, error };
};
