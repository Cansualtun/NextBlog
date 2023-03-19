import Card from "@/components/Card/card"
import Navbar from "@/components/UI/navbar"
import axios from "axios";

export default function Blog({posts}) {
  return (
        <>
        <title>Blog Site</title>
        <Navbar/>
        {/* <div className="flex justify-center gap-10"> */}
        <h1 className="text-4xl font-bold flex justify-center gap-3 mt-5"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">All</span>Blogs</h1>
        {/* </div> */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 pl-20 pr-10 mt-2">
            {posts.map((post) => {
                return (
                    <>
                    <Card key={post.id} id={post.id} post={post} title={post.title} body={post.body} />
                    </>
                )
            })}
        </div>
    </>
    )
}

export async function getServerSideProps(context) {
    const { data } = await axios("https://dummyjson.com/posts");
    console.log(data)
    return {
      props: {
        posts: data.posts,
      },
    };
  }