import { Divider } from '@heroui/react';
import PostGrid from '../../sections/posts/post-grid';

export default function Index() {
  return (
    <main className="mt-8 flex flex-col gap-4">
      <h2 className="text-3xl text-center font-bold">Tất cả bài viết</h2>
      <PostGrid />
    </main>
  );
}
