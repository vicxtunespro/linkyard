import React from 'react'
import Link from 'next/link'
import NavBar from '@/components/navbar'

export default function TopArea() {
  return (
    <div className='flex flex-col gap-8'>
        {/* billboard */}
        <div className='px-4 py-4 md:px-16 md:py-4'>
          <span className='bg-purple-300 h-48 md:h-48 rounded-md p-4 flex justify-center items-center'>
              <p className='font-medium text-xl'>Billboard</p>
          </span>
        </div>

        {/* Navigation */}
        <div className='w-full relative'>
            <NavBar />
        </div>
        

    </div>
  )
}
