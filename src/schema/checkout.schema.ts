import * as z from "zod";
export const checkoutSchema = z.object({
  details: z.string().nonempty("This field is required"),
  phone: z
    .string()
    .nonempty("This field is required")
    .regex(/^01[0251][0-9]{8}$/, "invalid number"),
  city: z.string().nonempty("This field is required"),
});

export type checkoutType = z.infer<typeof checkoutSchema>;
