import { useForm, type FieldValues, type UseFormProps, type UseFormReturn } from "react-hook-form";



const useCustomForm = <TFieldValues extends FieldValues = FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: UseFormProps<TFieldValues, TContext, TTransformedValues>): UseFormReturn<TFieldValues, TContext, TTransformedValues> => useForm(props)