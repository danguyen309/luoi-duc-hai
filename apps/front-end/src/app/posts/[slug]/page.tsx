import { IPost } from 'apps/front-end/src/interfaces/post';
import Image from 'next/image';
import qs from 'qs';

export default async function Index({
  params,
}: {
  params: { slug: Promise<string> };
}) {
  const slug = (await params).slug;
  const queries = qs.stringify({
    populate: {
      cover: {
        populate: '*',
        fields: ['id', 'url'],
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
  const res = await fetch(`${process.env.API_ROOT}/v1/posts?${queries}`).then(
    (res) => res.json()
  );
  const { data } = res;
  const post: IPost = data[0];
  console.log({ post });
  return (
    <main className="mt-8 w-full px-8 flex flex-col gap-4 md:mx-auto md:w-2/3 lg:w-1/2">
      <h6>{post.title}</h6>
      <Image
        src={process.env.API_ROOT + post.cover?.url}
        alt={post.title}
        width={1920}
        height={1080}
      />
      <article className="prose">
        {post.content?.map((obj) => {
          if (obj.type === 'heading') {
            if (obj.level === 1) {
              return obj.children?.map((child, index) => {
                return <h1 key={index}>{child.text}</h1>;
              });
            } else if (obj.level === 2) {
              return obj.children?.map((child, index) => {
                return <h2 key={index}>{child.text}</h2>;
              });
            } else if (obj.level === 3) {
              return obj.children?.map((child, index) => {
                return <h3 key={index}>{child.text}</h3>;
              });
            }
          } else if (obj.type === 'paragraph') {
            return obj.children?.map((child, index) => {
              return <p key={index}>{child.text}</p>;
            });
          }
        })}
      </article>
    </main>
  );
}
