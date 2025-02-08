import FeaturedProductComponent from '@/components/FeaturedProductComponent'
import ChairGallery from '@/components/GalleryComponent'
import LastHome from '@/components/LastHomeComponent'
import Logos from '@/components/logos'
import FurnitureCollection from '@/components/section1'
import TopCategories from '@/components/TopCategoryComponent'
import React from 'react'

export default function Home() {
  return (
    <div className='px-4 md:pl-56 md:pr-36 flex-col flex '>
      <FurnitureCollection />
      <Logos/>
      <div>
        <h1 className='text-4xl font-semibold'>Featured Products</h1>
      </div>
      <FeaturedProductComponent/>
      <TopCategories/>
    < ChairGallery/>
      <div className='mt-12'>
        <h1 className='text-4xl w-full text-center font-semibold'>Our  Products</h1>
      </div>
    
    <LastHome/>
    </div>
  )
}
