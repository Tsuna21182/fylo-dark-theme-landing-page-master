function Btn({ name }: { name: string }) {
  return (
    <button className="bg-gradient-to-r from-Cyan to-Blue rounded-3xl py-4 px-20 text-white text-base hover:from-Cyan hover:to-Cyan transition-all duration-300 mt-5 cursor-pointer">
      {name}
    </button>
  );
}

export default Btn;
