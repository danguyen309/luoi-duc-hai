import { Metadata } from 'next';
import Banners from '../sections/landing-page/banners';
import FeaturedProducts from '../sections/landing-page/featured-products';
import Partners from '../sections/landing-page/partners';
import WhyChooseUs from '../sections/landing-page/why-choose-us';

import qs from 'qs';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: 'Cơ sở lưới cước Đức Hải',
  description:
    'LƯỚI ĐỨC HẢI là đơn vị chuyên sản xuất lưới bao che nông nghiệp, lưới chắn côn trùng, lưới phủ công trình, lưới sàn nông nghiệp.',
  keywords: [
    'CƠ SỞ LƯỚI CƯỚC ĐỨC HẢI',
    'luo cuoc nhua',
    'luoi cuoc duc hai',
    '0903965919',
    'luoi danh ca',
    'luoi che rau sach',
    'luoi che lan',
    'luoi cha cay kieng',
    'lưới nông nghiệp',
    'lưới chắn côn trùng',
    'lưới sàn nông nghiệp',
    'lưới cào',
    'lưới mùng',
  ],
};

const params = qs.stringify({
  populate: {
    cover: {
      populate: '*',
      fields: ['id', 'url'],
    },
  },
});

export default async function Index() {
  const res = await fetch(`${process.env.API_ROOT}/v1/products?${params}`).then(
    (res) => res.json()
  );
  const { data } = res;
  return (
    <main className="">
      <Banners />
      <WhyChooseUs />
      <FeaturedProducts products={data} />
      <Partners />
    </main>
  );
}
