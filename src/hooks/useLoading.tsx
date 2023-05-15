import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Spinner = <FaSpinner className="spinner" />;
  const startLoading = () => {
    setIsLoading(true);
  };
  const endLoading = () => {
    setIsLoading(false);
  };
  return { isLoading, startLoading, endLoading, Spinner };
};

export default useLoading;
