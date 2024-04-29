import { useForm } from "react-hook-form";

type TextareaType = {
  label: string;
  htmlFor: string;
  placeholder: string;
  register?: (value: string) => unknown;
  name: string;
}

const TextArea = ({ htmlFor, label, placeholder, name }: TextareaType) => {
  const { register } = useForm()
  return (
    <div className="mt-4">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
      >{label}</label>
      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={htmlFor}
        placeholder={placeholder}
        {...(register(name as string) as unknown as Record<string, unknown>)}
      />
    </div>
  )
}

export default TextArea