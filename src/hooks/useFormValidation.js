import { useState, useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook for form validation
 * @param {object} initialState - Initial form values
 * @param {function} validateFn - Validation function that returns error object
 * @returns {object} Form state, error state, and update handlers
 */
export const useFormValidation = (initialState, validateFn) => {
  const [formDetails, setFormDetails] = useState(initialState);
  const [error, setError] = useState({});
  const errorTimeoutRef = useRef(null);

  // Clear errors after 2 seconds
  useEffect(() => {
    const hasErrors = Object.keys(error).length > 0;

    if (hasErrors) {
      const timer = setTimeout(() => {
        setError({});
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  // Update form field
  const onFormUpdate = useCallback((field, value) => {
    setFormDetails(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error for this field
    if (error[field]) {
      setError(prev => ({
        ...prev,
        [field]: false
      }));
    }
  }, [error]);

  // Validate form
  const validateForm = useCallback(() => {
    const tempErrors = validateFn(formDetails);
    setError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }, [formDetails, validateFn]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormDetails(initialState);
    setError({});
  }, [initialState]);

  return {
    formDetails,
    setFormDetails,
    error,
    setError,
    onFormUpdate,
    validateForm,
    resetForm
  };
};
