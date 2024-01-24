import {
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full border-x gap-y-8 border-gray-300 p-8">
      <div className="bg-primary rounded-full p-8 shadow-sm">
        <ChatBubbleOvalLeftIcon className="w-20 h-20 text-white" />
      </div>

      <h2 className="font-semibold text-gray-800 text-4xl">
        Welcome to Chat App
      </h2>
      <p className="text-gray-600 max-w-md text-center">
        Connect with friends and start chatting. Add new contacts to expand your
        network.
      </p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 text-2xl mb-4">
          Quick Tips:
        </h3>
        <ul className="text-gray-600 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2">
            <span className="bg-primary rounded-full p-1 inline-block">
              <PlusIcon className="w-4 h-4 text-white" />
            </span>{' '}
            Add contacts to start chatting.
          </li>

          <li className="flex items-center gap-x-2">
            <span className="bg-gray-50 rounded-full p-1 border border-gray-300 inline-block">
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 text-gray-800" />
            </span>{' '}
            Click on a contact to view and send messages.
          </li>

          <li className="flex items-center gap-x-2">
            <span className="bg-gray-50 rounded-full p-1 border border-gray-300 inline-block">
              <Cog6ToothIcon className="w-4 h-4 text-gray-800" />
            </span>{' '}
            Customize your profile in the settings.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
