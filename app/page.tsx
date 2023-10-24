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
      <section id='landing' className='relative w-full h-screen mx-auto bg-mobile md:bg-hero bg-cover bg-no-repeat bg-center mb-6 lg:mb-14' />
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
