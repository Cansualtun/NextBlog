import Card from "@/components/Card/card"
import axios from "axios";
import styles from "./styles.module.css"
import Navbar from "@/components/UI/navbar";
import CardDetail from "@/components/Card/cardDetail";
export default function BlogDetail ({post}) {
    return (
      <>
      <Navbar/>
        <div class={styles.deneme}>
            <CardDetail post={post}/>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
    const { data } = await axios(`https://dummyjson.com/posts/${id}`);
    return {
      props: {
        post: data,
      },
    };
  }