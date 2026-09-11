import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(8, "Password is required"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
