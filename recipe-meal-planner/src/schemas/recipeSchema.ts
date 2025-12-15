import { z } from 'zod'

export const createRecipeSchema = z.object({
  name: z.string().nonempty(),
  servings: z.number().positive(),
  prepTime: z.number().positive(),
  cookTime: z.number().positive(),
  difficulty: z.string().nonempty(),
  description: z.string().optional(),
})
