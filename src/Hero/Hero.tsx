import Btn from "../components/Btn";

function Hero() {
  return (
    <section className="mt-15 flex flex-col items-center">
      <div>
        <img src="/images/illustration-intro.png" alt="imagen intro" />
      </div>
      <div className="text-gray-200 text-center mt-5">
        <h3 className="font-bold font-Headings text-2xl">
          All your files in one secure location, accessible anywhere.
        </h3>
        <p className="text-sm">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
      <Btn name={"Get Started"} />
    </section>
  );
}

export default Hero;
