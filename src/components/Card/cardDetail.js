import Link from "next/link"

export default function CardDetail({post}) {

    const {title , body} = post
    return (
        <>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <Link href="#">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </Link>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>
     </div>
     </>
    )
 }   