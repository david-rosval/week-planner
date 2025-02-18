import { SignIn } from '@clerk/remix'

export default function Page() {
  return (
    <div className='h-dvh w-full flex justify-center items-center'>
      <SignIn />
    </div>
  )
}