/* eslint-disable react-refresh/only-export-components */
import { Controller, useFormContext } from 'react-hook-form'
import Clipboard from '../../../../assets/Clipboard.svg'

import { MdAddCircleOutline } from 'react-icons/md'
import { IconRemove } from '../../../../assets/icon-remove'
import { ComponentProps } from 'react'

interface FormProps {
  submitTask: () => void
}

const FormInput = ({ submitTask }: FormProps) => {
  const { control } = useFormContext()
  return (
    <form
      onSubmit={submitTask}
      className="flex w-full justify-center mt-[-1.65rem] gap-[0.5rem]"
    >
      <Controller
        name="task"
        control={control}
        render={({ field }) => (
          <input
            type="text"
            className="h-[3.375rem] w-full bg-gray-500 rounded-lg border-[1px] border-gray-700 font-inter text-gray-300 pl-4 placeholder:text-gray-300 outline-none focus:duration-300 focus:border-purple"
            placeholder="Adicione uma nova tarefa"
            {...field}
          />
        )}
      />
      <button
        type="submit"
        className="h-[3.375rem] p-4 rounded-lg bg-blue-dark text-gray-100 font-bold text-mid font-inter hover:bg-blue duration-300 flex justify-center items-center gap-[0.4rem]"
      >
        Criar
        <MdAddCircleOutline />
      </button>
    </form>
  )
}

interface NumberTaskProps {
  allCreatedTasks: number
  completedTask: number
  AllTasks: number
}

const NumberTask = ({
  allCreatedTasks,
  completedTask,
  AllTasks,
}: NumberTaskProps) => {
  return (
    <div className="flex m-auto mt-16 justify-between  pb-6">
      <span className="font-inter font-bold text-mid text-blue flex gap-2">
        Tarefas criadas
        <p className="bg-gray-400 font-inter text-gray-200 w-[1.5625rem] h-[1.1875rem] rounded-full  flex items-center justify-center text-min">
          {allCreatedTasks}
        </p>
      </span>
      <span className="font-inter font-bold text-mid text-purple flex gap-2">
        Concluídas
        <span className="bg-gray-400 font-inter text-gray-200 font-bold text-min gap-1 px-2 rounded-full flex items-center justify-center">
          {AllTasks > 0 ? (
            <>
              <p>{completedTask}</p>
              de
              <p>{AllTasks}</p>
            </>
          ) : (
            <p>{completedTask}</p>
          )}
        </span>
      </span>
    </div>
  )
}

const ThereAreNoTasks = () => {
  return (
    <div className="flex flex-col items-centers border-t-[1px] pt-16 m-auto border-gray-400 items-center">
      <img
        src={Clipboard}
        alt="lodo header"
        className="w-[7.875rem] h-12 mb-4"
      />
      <strong className="text-gray-300 font-bold text-max font-inter">
        Você ainda não tem tarefas cadastradas
      </strong>
      <span className="text-gray-300 text-max font-inter">
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}

interface TaskReviewProps extends ComponentProps<'input'> {
  title: string
  removeTask: () => void
  stylesChecked: string
}

const TaskReview = ({
  title,
  stylesChecked,
  removeTask,
  ...props
}: TaskReviewProps) => {
  return (
    <div className="flex justify-between p-5 w-full bg-gray-500 border-[1px] border-gray-400 rounded-lg">
      <div className="flex gap-3">
        <input
          type="checkbox"
          placeholder="Adicione uma nova tarefa"
          className="appearance-none w-[18px] h-[17px] border-2 rounded-full border-blue duration-300 checked:bg-purple"
          {...props}
        />
        <label
          className={`text-gray-100 font-inter font-normal text-mid ${stylesChecked} `}
        >
          {title}
        </label>
      </div>
      <span
        onClick={removeTask}
        className=" cursor-pointer border-none hover:text-danger hover:bg-gray-400 text-gray-300 duration-300 rounded-[4px]"
      >
        <IconRemove />
      </span>
    </div>
  )
}

const ContainerTasks = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="pb-[22rem] px-[22rem]">{children}</div>
}

export const ContentForm = {
  FormInput,
  Container,
  NumberTask,
  TaskReview,
  ContainerTasks,
  ThereAreNoTasks,
}
