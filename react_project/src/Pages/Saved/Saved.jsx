import Post from "src/Forms/Post/Post";
import data from "src/Forms/Post/data";

export default function Saved() {
  return (
    <div className="w-5/6 mx-auto mt-[6rem] bg-transparent">
      <div className="grid grid-cols-5 gap-4 mb-12">
      {
          data.map((post)=>(
            <Post
          key={post.id}
          className=""
          photo={post.src}
          title={post.title}
          price={post.price}
        ></Post>
          ))
        }
      </div>
    </div>
  );
}
