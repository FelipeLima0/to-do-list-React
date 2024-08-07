import { z } from 'zod'

export const SchemaFormTask = z.object({
  task: z.string(),
})

export type SchemaFormTaskType = z.infer<typeof SchemaFormTask>
