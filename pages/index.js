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
      <body class="bg-gray-300">
      <div class="container mx-auto my-auto p-2 bg-white flex justify-center items-center align-middle">

        <div class='container first mx-auto my-auto bg-amber-200 flex flex-col'>
          <div class='container p-12 '>REGISTRATION FORM</div>
          <div class='flex p-8 bg-blue-500'>
          <label class="block w-1/3 p-4 bg-green-200">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
          </label>
          <label class="block w-1/3 p-4 bg-green-200 ">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Username
            </span>
            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="@username" />
          </label>
          <label class="block w-1/3 p-4 bg-green-200">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
             Password
            </span>
            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="*******" />
          </label>
          </div>
        </div>

      </div>

      </body>

     
  
    </div>
  )
}
