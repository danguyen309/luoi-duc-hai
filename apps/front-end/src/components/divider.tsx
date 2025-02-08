const Divider = ({ title }: { title: string }) => {
  return (
    <span className="relative flex justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 relative z-10 bg-white px-6">
        {title}
      </h2>
    </span>
  );
};

export default Divider;
