const Divider = ({ title }: { title: string }) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

      <h6 className="text-neutral-500 relative z-10 bg-white px-4">
        {title}
      </h6>
    </div>
  );
};

export default Divider;
