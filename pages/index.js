import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cfern</title>
        <meta name="description" content="hello" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body class="bg-gray-300 grid place-items-center h-screen">

      <div class="container rounded-lg border-2 border-sky-700 mx-auto p-2 xl:w-1/2 bg-white flex justify-center items-center align-middle">

        <div class='container first mx-auto my-auto flex flex-col'>
          <div class='container my-3 px-8 pt-3 font-bold text-2xl'>About You</div>
          <div class='mt-2 mb-5'>

          <label class="block px-8 md:w-9/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-sky-700 block text-sm font-medium text-slate-700">
              Name
            </span>
            <div class='flex '>
            <input type="email" name="email" class="mt-1 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="First" />
            <input type="email" name="email" class="mt-1 mx-2  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Middle" />
            <input type="email" name="email" class="mt-1 ml-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Last" />
            </div>
            </label>

            <label class="block mt-2 px-8 sm:w-1/2">
            <span class="after:content-['*'] after:ml-0.5 after:text-sky-700 block text-sm font-medium text-slate-700">
              Social Security Number
            </span>
            <div class='flex '>
            <input type="email" name="email" class="mt-1 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="SSN" />
            </div>
            </label>

            <label class="block mt-2 px-8 sm:w-1/3">
            <span class="after:content-['*'] after:ml-0.5 after:text-sky-700 block text-sm font-medium text-slate-700">
              Date-Of-Birth
            </span>
            <div class='flex '>
            <input type="email" name="email" class="mt-1 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="YYYY-MM-DD" />
            </div>
            </label>
          
          </div>

        
        </div>
        </div>

        
      </body>

      
  
    </div>
  )
}
