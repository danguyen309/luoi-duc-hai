import { Pagination } from '@heroui/react';
import PostGrid from '../../sections/posts/post-grid';

import qs from 'qs';

export default async function Index() {
  const queries = qs.stringify({
    populate: {
      cover: {
        populate: '*',
        fields: ['id', 'url'],
      },
    },
  });
  const res = await fetch(`${process.env.API_ROOT}/v1/posts?${queries}`).then(
    (res) => res.json()
  );
  const { data } = res;
  return (
    <main className="mt-8 flex flex-col items-center gap-8">
      <h2 className="text-3xl text-center font-bold">Tất cả bài viết</h2>
      <PostGrid posts={data} />
      <Pagination showShadow initialPage={1} total={10} />
    </main>
  );
}
