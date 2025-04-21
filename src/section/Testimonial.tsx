import TestimDb from "../DB/TestimDb";

function Testimonial() {
  return (
    <section className="mt-30">
      <div className="text-white space-y-5 ">
        <span>
          <img
            src="/images/bg-quotes.png"
            alt="imagen quotes"
            className="w-8"
          />
        </span>
        {TestimDb.map((item, index) => (
          <div
            key={index}
            className="bg-DarkBlueTestimonialsBackground p-8 rounded-lg"
          >
            <p className="font-light ">{item.description}</p>
            <div className="flex items-center gap-3 mt-8">
              <img
                src={item.image}
                alt="imagen perfil"
                className="rounded-full w-12"
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="font-light text-sm">{item.Cargo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
