import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

export type DiscListProps = PropsWithChildren & HTMLAttributes<HTMLUListElement>

export const DiscList: FC<DiscListProps> = ({ children, className, ...props }) => {
  return <ul className={clsx('text-lg list-disc list-inside mx-2 leading-7', className)} {...props}>{children}</ul>
}
