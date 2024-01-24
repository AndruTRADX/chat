import Image from 'next/image'

interface Contact {
  username: string
  avatar: string
  lastMessage: string
  lastMessageDate: string
  pendingMessages?: number
}

interface ContactCardProps {
  contact: Contact
}

const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <div className="flex justify-between items-start rounded-xl hover:bg-primary/5 p-2 gap-3">
      <Image
        src={contact.avatar}
        className="rounded-xl"
        alt={contact.username}
        width={40}
        height={40}
      />

      <div className='flex justify-between items-start w-full'>
        <div className="flex flex-col justify-start gap-y-1">
          <h4 className="font-semibold text-gray-800 text-sm">
            {contact.username}
          </h4>
          <p className="font-semibold text-gray-400 text-xs max-h-12 overflow-hidden overflow-ellipsis">
            {contact.lastMessage}
          </p>
        </div>

        <div className="flex flex-col items-end justify-between gap-3">
          <h4 className="font-semibold text-gray-400 text-sm">
            {contact.lastMessageDate}
          </h4>

          {contact.pendingMessages && (
            <div className="flex justify-center items-center px-[6px] py-[2px] rounded-full bg-green-500 text-xs text-white font-bold">
              {contact.pendingMessages}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactCard
