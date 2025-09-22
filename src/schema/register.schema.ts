import * as z from "zod";
export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("This field is required")
      .min(2, "The minimum is 2 chars")
      .max(10, "the maximum is 10 chars"),
    email: z.email().nonempty("This field is required"),
    password: z
      .string()
      .min(6, "please enter at least 6 chars")
      .nonempty("This field is required"),
    rePassword: z.string().nonempty("This field is required"),
    phone: z
      .string()
      .nonempty("This field is required")
      .regex(/^01[0251][0-9]{8}$/),
  })
  .refine((object) => object.password === object.rePassword, {
    path: ["rePassword"],
    error: "The password must match the re-password",
  });

export type registerType = z.infer<typeof registerSchema>;
