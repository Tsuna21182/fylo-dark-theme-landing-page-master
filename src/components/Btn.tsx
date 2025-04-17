function Btn({ name }: { name: string }) {
  return (
    <button className="bg-gradient-to-r from-Cyan to-Blue rounded-3xl py-3 px-20 text-white text-xs hover:from-Cyan hover:to-Cyan transition-all duration-300 mt-10">
      {name}
    </button>
  );
}

export default Btn;
