import { Icon } from '@iconify/react/dist/iconify.js';

type IconifyProps = {
  iconName: string;
};

const Iconify = (props: IconifyProps) => {
  const { iconName } = props;
  return <Icon icon={iconName} />;
};

export default Iconify;
