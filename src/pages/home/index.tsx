import { FormProvider } from 'react-hook-form'
import { useFormInput } from '../../hooks/useFormInput'
import { ContentForm } from './components/ui/content-form'

export default function Home() {
  const {
    method,
    allTasks,
    handleSelect,
    selectedItems,
    handleRemoveTask,
    handleCreateTask,
  } = useFormInput()

  return (
    <ContentForm.Container>
      <FormProvider {...method}>
        <ContentForm.FormInput
          submitTask={method.handleSubmit(handleCreateTask)}
        />
      </FormProvider>
      <ContentForm.NumberTask
        allCreatedTasks={allTasks.length}
        AllTasks={allTasks.length}
        completedTask={selectedItems.length}
      />
      {allTasks.length === 0 ? (
        <ContentForm.ThereAreNoTasks />
      ) : (
        <ContentForm.ContainerTasks>
          {allTasks.map((task) => {
            const isSelected = selectedItems.includes(task.id.toString())
            return (
              <ContentForm.TaskReview
                key={task.id}
                title={task.task}
                onChange={() => handleSelect(task.id)}
                checked={isSelected}
                removeTask={() => handleRemoveTask(task.id)}
                stylesChecked={isSelected ? 'line-through opacity-30' : ''}
              />
            )
          })}
        </ContentForm.ContainerTasks>
      )}
    </ContentForm.Container>
  )
}
