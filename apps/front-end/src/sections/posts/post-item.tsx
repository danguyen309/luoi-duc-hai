import { Card, CardBody, Image } from '@heroui/react';
import { IPost } from '../../interfaces/post';
import Link from 'next/link';

type PostItemProps = {
  post: IPost;
};

const PostItem = (props: PostItemProps) => {
  const { post } = props;
  return (
    <Card isPressable as={Link} href={`chia-se/${post.slug}`}>
      <CardBody className="overflow-visible">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-4">
            <Image
              alt={post.title}
              className="object-cover rounded-xl"
              src={process.env.API_ROOT + post.cover?.url}
              width={80}
              height={80}
            />
          </div>
          <div className="col-span-8">
            <h4 className=" font-bold text-large">{post.title}</h4>
            <p>{post.content?.slice(256)}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostItem;
