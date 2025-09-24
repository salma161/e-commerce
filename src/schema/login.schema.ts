import * as z from "zod";
export const loginSchema = z.object({
  email: z.email().nonempty("This field is required"),
  password: z
    .string()
    .min(6, "please enter at least 6 chars")
    .nonempty("This field is required"),
});

export type loginType = z.infer<typeof loginSchema>;
