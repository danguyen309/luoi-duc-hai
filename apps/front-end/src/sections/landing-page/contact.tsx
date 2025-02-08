import {
  BriefcaseIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Divider from '../../components/divider';

const Contact = () => {
  return (
    <section className="bg-white flex flex-col px-4 py-4 sm:px-6 sm:py-32 lg:px-8">
      <Divider title="Liên hệ" />

      <div className="mt-8 grid grid-cols-1 items-center gap-4  lg:max-w-7xl lg:grid-cols-2 ">
        <div className="rounded-xl bg-green-50 p-4 flex flex-col justify-start gap-2">
          <div className="flex items-center gap-2">
            <MapPinIcon height={24} width={24} />{' '}
            <strong className="text-neutral-700">Địa chỉ</strong>
          </div>
          <span>139E Tran Van Muoi</span>
        </div>

        <div className="rounded-xl bg-green-50 p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <PhoneIcon height={24} width={24} />
            <strong className="text-neutral-700">Hotline</strong>
          </div>
          <span>0903 965 919</span>
        </div>

        <div className="rounded-xl bg-green-50 p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BriefcaseIcon height={24} width={24} />
            <strong className="text-neutral-700">Giờ làm việc</strong>
          </div>
          <span>7h30-17h00 (Nghỉ Chủ Nhật và Dịp Lễ Tết)</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
