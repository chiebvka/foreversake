import About from '@/components/About'
import How from '@/components/How'
import Team from '@/components/Team'
import Why from '@/components/Why'
import Subscribe from '@/components/Subscribe'
import Product from '@/components/Product'

export const dynamic = 'force-dynamic'

export default async function Index() {
  return (
    <>
      <section id='landing' className='relative w-full h-[80vh] mx-auto bg-mobile md:bg-hero bg-cover xl:bg-contain bg-no-repeat bg-center  mb-6 md:mb-0' />
      <About />
      <Team />
      <Product />
      <How />
      <Why />
      {/* <Kickstarter /> */}
      <Subscribe />
  </>
  )
}
