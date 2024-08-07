import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaFormTask, SchemaFormTaskType } from './schema'
import { useState } from 'react'

interface AllTasksProps {
  task: string
  id: number
}

interface Props {
  handleCreateTask: (data: SchemaFormTaskType) => void
  method: UseFormReturn<SchemaFormTaskType>
  handleRemoveTask: (id: number) => void
  handleSelect: (id: number) => void
  allTasks: AllTasksProps[]
  selectedItems: string[]
}

export const useFormInput = (): Props => {
  const [allTasks, setAllTasks] = useState<AllTasksProps[]>([])
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const method = useForm<SchemaFormTaskType>({
    resolver: zodResolver(SchemaFormTask),
  })

  function handleCreateTask(data: SchemaFormTaskType) {
    if (data.task === '') return

    setAllTasks((prev) => [...prev, { id: Date.now(), task: data.task }])

    method.reset({
      task: '',
    })
  }

  const handleSelect = (id: number) => {
    if (selectedItems.includes(id.toString())) {
      setSelectedItems(selectedItems.filter((item) => item !== id.toString()))
    } else {
      setSelectedItems([...selectedItems, id.toString()])
    }
  }

  const handleRemoveTask = (id: number) => {
    setSelectedItems(selectedItems.filter((item) => item !== id.toString()))

    setAllTasks(allTasks.filter((item) => item.id !== id))
  }

  return {
    method,
    allTasks,
    handleSelect,
    selectedItems,
    handleCreateTask,
    handleRemoveTask,
  }
}
