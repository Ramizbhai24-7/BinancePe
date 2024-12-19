import React from 'react'
import Title from './Title'

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
        <Title className="text-3xl md:text-4xl uppercase font-bold text-center">Best Clothing Collections</Title>
        <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">Shop the latest trends, gadgets, and essentials at unbeatable prices. Enjoy secure payments, fast shipping, and easy returns. With new arrivals and exclusive deals, there&apos;s always something exciting waiting for you. Start shopping today and find what you love!</p>
    </div>
  )
}

export default HomeBanner