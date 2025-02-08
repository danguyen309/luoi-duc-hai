import PostItem from './post-item';

const PostGrid = () => {
  return (
    <section className="px-4 grid grid-cols-12 gap-x-4 gap-y-4 justify-center lg:px-16">
      {[1, 2, 3].map((post, index) => {
        return (
          <div key={index} className="col-span-12 md:col-span-6">
            <PostItem />
          </div>
        );
      })}
    </section>
  );
};

export default PostGrid;
