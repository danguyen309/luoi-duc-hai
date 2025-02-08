import Image from 'next/image';
import Divider from '../../components/divider';

const Partners = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl px-6 lg:px-8">
        <Divider title="Đối tác của chúng tôi" />

        <div className="mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="BIDV"
            src="/partner-logos/bidv.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="VietinBank"
            src="/partner-logos/vietin.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Agribank"
            src="/partner-logos/agri.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="ACB"
            src="/partner-logos/acb.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="Vietcombank"
            src="/partner-logos/vietcom.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
