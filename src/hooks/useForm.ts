import { useState, useCallback, type ChangeEvent, type FormEvent } from 'react';

export interface FormField {
  value: string;
  error: string;
  touched: boolean;
}

export type FormFields<T extends string> = Record<T, FormField>;

export type ValidationRules<T extends string> = Partial<Record<T, (value: string, fields: FormFields<T>) => string>>;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface UseFormOptions<T extends string> {
  initialValues: Record<T, string>;
  validationRules?: ValidationRules<T>;
  onSubmit: (values: Record<T, string>) => Promise<void>;
}

interface UseFormReturn<T extends string> {
  fields: FormFields<T>;
  status: FormStatus;
  errorMessage: string;
  handleChange: (field: T) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (field: T) => () => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  resetForm: () => void;
  isValid: boolean;
}

function createInitialFields<T extends string>(values: Record<T, string>): FormFields<T> {
  const fields = {} as FormFields<T>;
  for (const key in values) {
    fields[key] = { value: values[key], error: '', touched: false };
  }
  return fields;
}

export function useForm<T extends string>({
  initialValues,
  validationRules = {},
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [fields, setFields] = useState<FormFields<T>>(() => createInitialFields(initialValues));
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = useCallback(
    (field: T, value: string): string => {
      const rule = validationRules[field];
      if (rule) {
        return rule(value, fields);
      }
      return '';
    },
    [validationRules, fields]
  );

  const handleChange = useCallback(
    (field: T) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFields((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          value,
          error: prev[field].touched ? validateField(field, value) : '',
        },
      }));
    },
    [validateField]
  );

  const handleBlur = useCallback(
    (field: T) => () => {
      setFields((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          touched: true,
          error: validateField(field, prev[field].value),
        },
      }));
    },
    [validateField]
  );

  const validateAllFields = useCallback((): boolean => {
    let isValid = true;
    const newFields = { ...fields };

    for (const key in fields) {
      const error = validateField(key as T, fields[key].value);
      newFields[key] = { ...fields[key], touched: true, error };
      if (error) isValid = false;
    }

    setFields(newFields);
    return isValid;
  }, [fields, validateField]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setErrorMessage('');

      if (!validateAllFields()) {
        return;
      }

      setStatus('submitting');

      try {
        const values = {} as Record<T, string>;
        for (const key in fields) {
          values[key] = fields[key].value;
        }

        await onSubmit(values);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      }
    },
    [fields, validateAllFields, onSubmit]
  );

  const resetForm = useCallback(() => {
    setFields(createInitialFields(initialValues));
    setStatus('idle');
    setErrorMessage('');
  }, [initialValues]);

  const isValid = Object.values(fields).every(
    (field) => !(field as FormField).error && (field as FormField).value.trim() !== ''
  );

  return {
    fields,
    status,
    errorMessage,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isValid,
  };
}

export const validators = {
  required: (message = 'This field is required') => (value: string) =>
    value.trim() ? '' : message,

  email: (message = 'Please enter a valid email') => (value: string) => {
    if (!value.trim()) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : message;
  },

  minLength: (length: number, message?: string) => (value: string) => {
    if (!value.trim()) return '';
    return value.length >= length
      ? ''
      : message || `Must be at least ${length} characters`;
  },

  maxLength: (length: number, message?: string) => (value: string) => {
    return value.length <= length
      ? ''
      : message || `Must be no more than ${length} characters`;
  },

  combine: (...validators: ((value: string) => string)[]) => (value: string) => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return '';
  },
};

export default useForm;