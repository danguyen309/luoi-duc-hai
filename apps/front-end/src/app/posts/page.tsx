import { Pagination } from '@heroui/react';
import PostGrid from '../../sections/posts/post-grid';

export default function Index() {
  return (
    <main className="mt-8 flex flex-col items-center gap-8">
      <h2 className="text-3xl text-center font-bold">Tất cả bài viết</h2>
      <PostGrid />
      <Pagination showShadow initialPage={1} total={10} />
    </main>
  );
}
