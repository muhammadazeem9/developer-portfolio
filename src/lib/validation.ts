import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(80, { message: 'Name must be less than 80 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' }),
  company: z
    .string()
    .trim()
    .max(100, { message: 'Company name must be less than 100 characters.' })
    .optional()
    .or(z.literal('')),
  projectType: z
    .string()
    .min(1, { message: 'Please select a project type.' }),
  budget: z
    .string()
    .optional()
    .or(z.literal('')),
  timeline: z
    .string()
    .optional()
    .or(z.literal('')),
  description: z
    .string()
    .trim()
    .min(15, { message: 'Please provide at least 15 characters describing your project or inquiry.' })
    .max(3000, { message: 'Description must be under 3000 characters.' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
