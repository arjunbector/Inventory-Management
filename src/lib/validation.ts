import { z } from "zod";

export const createSupplierSchema = z.object({
    name: z.string().min(3).max(255),
    contactInformation: z.string(),
    address: z.string()
})

export const createCategorySchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string()
})

export const createOrderSchema = z.object({
    orderDate: z.date(),
    totalAmount: z.number(),
    status: z.enum(["PENDING", "COMPLETED", "CANCELLED"]),
})