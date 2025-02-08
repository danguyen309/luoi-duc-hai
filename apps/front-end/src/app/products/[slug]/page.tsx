import { Divider } from '@heroui/divider';
import Image from 'next/image';

export default function Index() {
  return (
    <main>
      <section className="p-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
        <div className="flex flex-col gap-2">
          <Image
            src="https://images.unsplash.com/photo-1567712282264-021d8259e0cd?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={1920}
            height={1080}
          />
          <div className="flex items-center gap-2">
            <Image
              src="https://images.unsplash.com/photo-1567712282264-021d8259e0cd?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={80}
              height={80}
            />

            <Image
              src="https://images.unsplash.com/photo-1589940734130-a34167959331?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8MTA4MHB8ZW58MHx8MHx8fDA%3D"
              alt=""
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Product Name</h3>
          <p className="text-lg text-neutral-700">
            Lưới che nông nghiệp ĐỨC HẢI có độ bền rất cao, lưới nhẹ, bền, đẹp,
            thẳng, sợi lưới đồng đều và không thấm nước, dùng để che nắng cho
            các vườn cây lan, vườn ươm, vườn trồng hoa màu, rau sạch, che nắng
            lối đi, bể bơi, hồ cá, khu nghỉ mát, công trình... thích hợp với
            những công trình mang tính bền vững.
          </p>
        </div>

        <Divider />

        <h6 className="text-xl font-bold">Thông số kỹ thuật</h6>

        <div className="grid grid-cols-12 gap-x-4">
          <strong className="col-span-4 text-sm text-neutral-700">
            Đặc điểm nhận biết
          </strong>
          <p className="col-span-8 text-neutral-600">
            - Trên cuộn lưới luôn đi kèm tem của nhà sản xuất LƯỚI CƯỚC ĐỨC HẢI
            với hình ảnh "Mái nhà che chở cho mầm xanh", thông số kỹ thuật, độ
            che nắng, tiếng Việt. - Mỗi cuộn lưới được đóng gói kỹ càng theo
            tiêu chuẩn. - Bề mặt lưới óng ả, mềm mại, dai chắc, thông thoáng
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-4">
          <strong className="col-span-4 text-sm text-neutral-700">
            Đặc điểm nhận biết
          </strong>
          <p className="col-span-8 text-neutral-600">
            - Trên cuộn lưới luôn đi kèm tem của nhà sản xuất LƯỚI CƯỚC ĐỨC HẢI
            với hình ảnh "Mái nhà che chở cho mầm xanh", thông số kỹ thuật, độ
            che nắng, tiếng Việt. - Mỗi cuộn lưới được đóng gói kỹ càng theo
            tiêu chuẩn. - Bề mặt lưới óng ả, mềm mại, dai chắc, thông thoáng
          </p>
        </div>
      </section>
    </main>
  );
}
