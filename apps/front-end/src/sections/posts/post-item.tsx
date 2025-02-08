import { Card, CardBody, Image } from '@heroui/react';

const PostItem = () => {
  return (
    <Card isPressable>
      <CardBody className="overflow-visible">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-4">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://heroui.com/images/hero-card-complete.jpeg"
            />
          </div>
          <div className="col-span-8">
            <h4 className=" font-bold text-large">Frontend Radio</h4>
            <p>Description</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostItem;
