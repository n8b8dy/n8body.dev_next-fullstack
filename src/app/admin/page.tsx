import { Fragment } from 'react'
import { ReturnHomeButton } from '@/components/button/ReturnHomeButton'

export default function AdminPanel() {
  return <Fragment>
    <div className="flex justify-between items-center py-2">
      <div className="flex gap-4 items-center">
        <ReturnHomeButton/>
        <h1 className="text-2xl">Admin panel</h1>
      </div>
    </div>
  </Fragment>
}
