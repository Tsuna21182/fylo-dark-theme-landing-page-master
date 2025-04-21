import Data from "../DB/Data";

function Info() {
  return (
    <section className="mt-30">
      <div className="md:grid md:grid-cols-2 md:place-items-center">
        {Data.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center text-center text-white"
            key={index}
          >
            <img src={item.image} alt="imagen descripcion" />
            <h3 className="font-bold mt-10">{item.title}</h3>
            <p className="font-extralight text-sl mt-5 mb-20">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
