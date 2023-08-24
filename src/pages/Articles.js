import React, { useRef,useEffect } from 'react'
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import TransitionEffect from '../components/TransitionEffect';
import { motion, useMotionValue } from 'framer-motion';
const FramerImage=motion(Image);
const MovingImage=({title,img,link})=>{
   const x=useMotionValue(0);
   const y= useMotionValue(0);
   const ImageRef=useRef(null);
    function HandleMouse(event){
        ImageRef.current.style.display="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function HandleMouseLeave(event){
        ImageRef.current.style.display="none";
        x.set(0);
        y.set(0);
    }
    return(
        
        <Link href={link} target="_blank"
          onMouseMove={HandleMouse}
          onMouseLeave={HandleMouseLeave}
          > 
        
        <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2> 
     
     <FramerImage ref={ImageRef} src={img} alt={title} className=" z-10 w-96 h-auto hidden absolute rounded-lg"
     style={{x:x,y:y}}
   
     />
     </Link>
    );
};
const Article=({img,title,date,link})=>{
    return(
        <motion.li className="relative w-full p-4 py-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light sm:flex-col
        "
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}

        >
           < MovingImage title={title} link={link} img={img}/>
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}
const FeaturedArticle=({img,title,time,summary,link})=>{
    return(
        <li className="p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl col-span-1 relative">
              <div className="absolute top-0 -right-3 -z-10 w-[102%]
                    h-[103%]
                    rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
                    "/>
              <Link href={link} target={"_blank"}
                className="w-full overflow-hidden rounded-lg cursor-pointer inline-block"
                >
                    <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    />
                </Link>
                <Link href={link} target={"_blank"}>
                    <h2 className="font-bold capitalize text-2xl my-2 mt-4 hover:underline dark:text-light xs:text-lg">{title}</h2>
                </Link>
                <p className="text-sm mb-2 dark:text-light">{summary}</p>
                <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    )
}
const Articles=()=>{
    return(
        <>
        <Head>
        <title>Supratik De | Articles Page</title>
        <meta name="description" content="any"></meta>
        </Head>
        <TransitionEffect/>
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
            <Layout className="pt-16">
            <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl
                sm:!mb-5 sm:!text-6xl
                xs:!text-4xl"/>
            <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
               summary=" Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react"
                img={article1}

                
            />
            <FeaturedArticle
            title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
            summary="Learn how to create stunning loading screens in React with 3 different methods. 
            Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
            Improve the user experience."
             time="10 min read"
             link="https://medium.com/@davidarmah2022/creating-stunning-loading-screens-in-react-build-3-types-of-loading-screen-3dbeb1f743f4#:~:text=The%20first%20type%20of%20loading,a%20new%20file%20called%20SpinnerLoadingScreen."
             img={article2}
            />
            
            </ul>
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">All Articles</h2>
            <ul>
                <Article
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article3}
                    date="August 23,2023"
                    link="https://medium.com/@davidarmah2022/form-validation-in-reactjs-building-a-reusable-custom-hook-for-inputs-and-error-handling-dcffdeebe72f"
                />
                <Article
                    title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                    img={article3}
                    date="August 23,2023"
                    link="https://hackernoon.com/how-to-make-a-silky-smooth-scroll-in-react-5dj3xdl"
                />
                <Article
                    title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                    img={article3}
                    date="August 23,2023"
                    link="/"
                />
                <Article
                    title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                    img={article3}
                    date="August 23,2023"
                    link="/"
                />
                <Article
                    title="Redux Simplified: A Beginner's Guide For Web Developers"
                    img={article3}
                    date="August 23,2023"
                    link="/"
                />
                 <Article
                    title="What Is Higher Order Component (Hoc) In React?"
                    img={article3}
                    date="August 23,2023"
                    link="/"
                />
            </ul>
            </Layout>
        </main>
        </>
    )
}
export default Articles