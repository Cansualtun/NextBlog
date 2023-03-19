import { Inter } from 'next/font/google'
import Navbar from '../components/UI/navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination , A11y , Navigation , Autoplay } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './styles.module.css'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
const data = {
  products: [
    {
      image : "https://picsum.photos/seed/picsum/500/250",
    },
    {
     image : "https://picsum.photos/seed/picsum/500/250",
    },
    {
      image : "https://picsum.photos/seed/picsum/500/250",
    },
    {
      image: "https://picsum.photos/seed/picsum/500/250",
    }
  ]
}
const content = {
  paragraph : [
    {
      text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",            
    },
  ]
}

export default function Home() {
  return (
    <>
    <title>Blog Site</title>
     <Navbar/>
     <div className={styles.container}>
     <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay = {{delay : 3000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        data.products.map((product) => {
          return (
            <SwiperSlide key={"deneme"} className={styles.carousel}>
              {content.paragraph.map((paragraph) => {
                return (
                  <>
                  <div key={"deneme"} className={styles.paragraph}>
                    <p className={styles.text}>{paragraph.text}</p>
                  <Link href={"/blog"} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  More Detail
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
              </div>
              </>
                )
              }
              )} 
              <img src={product.image} className="rounded-lg shadow-gray-800 mr-10 mt-5" alt="product" />
            </SwiperSlide>
          )
        })}
    </Swiper>
    </div>
    </>
  )
}

