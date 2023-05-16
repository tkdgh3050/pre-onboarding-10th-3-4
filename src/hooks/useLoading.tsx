import React, { useState } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Spinner = <img className="spinner" src="/images/loading.svg" alt="loading-icon" />;
  const startLoading = () => {
    setIsLoading(true);
  };
  const endLoading = () => {
    setIsLoading(false);
  };
  return { isLoading, startLoading, endLoading, Spinner };
};

export default useLoading;
