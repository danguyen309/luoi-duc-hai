export const menuItems = [
  {
    key: 'products',
    label: 'Sản phẩm',
    href: '/san-pham',
    children: [
      {
        key: 'products-category1',
        label: 'Vật tư nông nghiệp',
        href: '/san-pham?loai=vat-tu-nong-nghiep',
      },
      {
        key: 'products-category2',
        label: 'Lưới nhựa',
        href: '/san-pham?loai=luoi-nhua',
      },
    ],
  },
  {
    key: 'posts',
    label: 'Chia sẻ',
    href: '/chia-se',
  },
  {
    key: 'about',
    label: 'Về chúng tôi',
    href: '/ve-chung-toi',
  },
  {
    key: 'contact',
    label: 'Liên hệ',
    href: '/lien-he',
  },
];
