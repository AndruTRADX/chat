import {
  ArrowRightOnRectangleIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

import Image from 'next/image'

const Settings = () => {
  return (
    <div className="w-[88px] flex flex-col justify-between items-center p-4 shadow-md">
      <div className="w-[56px] h-[352px] flex flex-col justify-between items-center">
        <div className="w-[56px] h-[56px]">
          <Image
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="random user"
            className="w-full h-full rounded-[14px]"
            fill
          />
        </div>

        <div className="w-[24px] h-full flex flex-col-reverse gap-y-8">
          <div className="w-[24px] h-[24px]">
            <ArrowRightOnRectangleIcon className="w-full h-full text-gray-800" />
          </div>
          <div className="w-[24px] h-[24px]">
            <ChatBubbleOvalLeftIcon className="w-full h-full text-primary" />
          </div>
          <div className="w-[24px] h-[24px]">
            <HomeIcon className="w-full h-full text-gray-800" />
          </div>
        </div>
      </div>

      <div className="w-[24px] h-[24px]">
        <Cog6ToothIcon className="w-full h-full text-gray-800" />
      </div>
    </div>
  )
}

export default Settings
