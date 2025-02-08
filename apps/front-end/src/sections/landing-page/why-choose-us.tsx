const features = [
  {
    name: '20+ năm kinh nghiệm',
    description: 'Hơn 20 năm phục vụ khách hàng.',
  },
  {
    name: 'Giao hàng toàn quốc',
    description: 'Vận chuyển nhanh chóng trên toàn quốc.',
  },
  {
    name: 'Chất lượng hàng đầu',
    description: 'Đảm bảo chất lượng tốt nhất cho sản phẩm.',
  },
  {
    name: 'Hỗ trợ 24/7',
    description: 'Luôn sẵn sàng hỗ trợ khách hàng mọi lúc.',
  },
  {
    name: 'Tiết kiệm tối đa chi phí',
    description: 'Giải pháp giúp bạn tiết kiệm chi phí hiệu quả.',
  },
  {
    name: 'Công nghệ hiện đại',
    description: 'Ứng dụng công nghệ tiên tiến trong dịch vụ.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white">
      <div className="grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h6 className="text-gray-900 sm:text-4xl">
            Tại sao chọn chúng tôi
          </h6>
          <p className="mt-4 text-gray-500">
            Lưới Đức Hải tự hào là nhà sản xuất lưới nông nghiệp hàng đầu tại
            thị trường Việt Nam.
          </p>

          <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
