import Chat from '@/components/Chat'

const page = ({ params }: { params: { contactID: string } }) => {
  const { contactID } = params

  return (
    <Chat />
  )
}

export default page
