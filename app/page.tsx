import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Kickstarter from '@/components/Kickstarter'
import About from '@/components/About'
import How from '@/components/How'
import Team from '@/components/Team'
import Why from '@/components/Why'
import Contact from '@/components/Contact'
import ContactForm from '@/components/ContactForm'
import Product from '@/components/Product'
import { motion } from 'framer-motion';
import { EaseInAnimation, PopAnimation, RotateAnimation, ScaleAnimation, SequenceAnimation } from '@/components/Motion'

export const dynamic = 'force-dynamic'


export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  return (
    <>
      <section id='landing' className='relative w-full h-screen mx-auto bg-hero bg-cover bg-no-repeat bg-center mb-6 lg:mb-14' />
      {/* <PopAnimation>
        <Kickstarter />
      </PopAnimation> */}
      <About />
      <Team />
      <Product />
      <How />
      <Why />
      <Contact />
  </>
  )
}
