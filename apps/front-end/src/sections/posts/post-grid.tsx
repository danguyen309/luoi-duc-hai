import { IPost } from '../../interfaces/post';
import PostItem from './post-item';

type PostGridProps = {
  posts: IPost[];
};

const PostGrid = (props: PostGridProps) => {
  const { posts } = props;
  console.log(posts);
  return (
    <section className="px-4 grid grid-cols-12 gap-x-4 gap-y-4 justify-center lg:px-16">
      {posts?.map((post, index) => {
        return (
          <div key={index} className="col-span-12 md:col-span-6">
            <PostItem post={post} />
          </div>
        );
      })}
    </section>
  );
};

export default PostGrid;
