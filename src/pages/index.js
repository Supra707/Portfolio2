import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilepic from "../../public/images/profile/dev-pic-2.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '../components/TransitionEffect'
export default function Home() {
  return (
    <>
      <Head>
        <title>Damn Good Looking Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className=" flex items-center text-dark bg-light dark:text-light w-full min-h-screen">
      <Layout className="md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
          <Image src={profilepic} alt="dev-pic" className="w-full h-auto lg:hidden md:inline-block md:w-full " 
          priority
          sizes="(max-width:768px) 100vw,
          (max-width:1200px) 50vw,
          50vw"
          />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center
          ">
            <AnimatedText text="Turning Vision Into Reality With Code And Design" className="!text-6xl text-left 
            xl:!text-5xl
            lg:!text-center
            lg:!text-6xl
            md:!text-5xl
            sm:!text-3xl

            "></AnimatedText>
              <p className="my-4 text-base font-medium md:text-sm
              sm:text-xs">
              As a skilled full-stack developer,  <strong className="text-2xl font-bolder">I (Supratik De)</strong> am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center mt-2 self-start gap-4 lg:self-center">
                  <Link href="/dummy.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light dark:text-dark dark:bg-light hover:dark:text-light hover:dark:bg-dark hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark hover:bg-light border-2 border-solid border-transparent hover:border-dark
                  md:p-2 md:px-4 md:text-base
                  "
                  >Resume<LinkArrow className={"w-6 ml-1"}/></Link>
                  <Link href="mailto:supratikde2@gmail.com" className="underline underline-offset-2 font-bold dark:text-light md:text-base">Contact</Link>
              </div>
          </div>

       </div>

      </Layout>
      <HireMe/>
      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden sm:hidden ">
        <Image src={lightbulb}alt="LightBulb" className='w-full h-auto'/>
      </div>
      </main>
      
    </>
  )
}
