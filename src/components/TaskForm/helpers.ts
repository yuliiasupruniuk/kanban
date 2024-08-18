import { z } from "zod"

export const generateFormSchema = () => {
	let schema = z.object({		
        title:  z.string().min(1),
        description:  z.string().min(1),
        status: z.string().min(1)
	})

	return schema
}