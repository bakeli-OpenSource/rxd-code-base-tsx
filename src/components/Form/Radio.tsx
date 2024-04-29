import { useForm } from "react-hook-form";

type RadioType = {
  label: string;
  htmlFor: string;
  name: string;
}

const Radio = ({ label, htmlFor, name }: RadioType) => {
  const { register } = useForm()
  return (
    <div className="flex items-center mb-4">
      <input
        id={htmlFor}
        type="radio"
        name={name}
        {...(register(name as string) as unknown as Record<string, unknown>)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={htmlFor} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    </div>
  )
}

export default Radio