import { z } from 'zod';

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters long')
    .max(100, 'Full name cannot exceed 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),
  
  age: z
    .number()
    .min(13, 'Age must be at least 13')
    .max(120, 'Age cannot exceed 120'),
  
  email: z
    .string()
    .email('Please provide a valid email address')
    .toLowerCase(),
  
  country: z
    .string()
    .min(1, 'Please select a country'),
  
  state: z
    .string()
    .min(1, 'Please select a state/province'),
  
  industry: z
    .string()
    .min(2, 'Industry is required')
    .max(60, 'Industry name is too long'),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

// Common industries list for dropdown
export const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Construction',
  'Transportation',
  'Hospitality',
  'Real Estate',
  'Marketing/Advertising',
  'Media/Entertainment',
  'Non-profit',
  'Government',
  'Agriculture',
  'Energy',
  'Consulting',
  'Legal',
  'Other',
] as const;
