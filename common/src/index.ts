import z from "zod"

export const signUpInput = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid Email" }),

    password: z
        .string({ required_error: "password is required" })
        .min(4, { message: "password must be greater than length 4" })
        .max(15, { message: "password must be less than length 15" }),

    name: z
        .string({ required_error: "name is required" })
        .min(4, { message: "name cannot be empty" })
        .max(25, { message: "name cannot be empty" })
})

export const signInInput = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid Email" }),

    password: z
        .string({ required_error: "password is required" })
        .min(4, { message: "password must be greater than length 4" })
        .max(15, { message: "password must be less than length 15" }),

})
export const blogInput = z.object({
    title: z
        .string({ required_error: "Title is required" })
        .min(6, { message: "Title must be greater than 6" }),

    content: z
        .string({ required_error: "Content is required" })
        .min(1, { message: "Content is required" })

})

export type blogInput = z.infer<typeof blogInput>
export type signUpInput = z.infer<typeof signUpInput>
export type signInInput = z.infer<typeof signInInput>