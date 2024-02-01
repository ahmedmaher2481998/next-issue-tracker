import { clsx } from 'clsx'
import { ClassNameValue, twMerge } from 'tailwind-merge'
export const cn = (...input: ClassNameValue[]) => twMerge(clsx(input))
