import { z } from "zod";

export const generateFormSchema = () =>
  z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.string().min(1),
  });
