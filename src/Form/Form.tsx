import Btn from "../components/Btn";

function Form() {
  return (
    <section className="mt-10 bg-DarkBlueIntroEmailSignBackground text-white text-center rounded-lg p-5">
      <h2 className="text-2xl mt-8">Get early access today</h2>
      <p className="font-light mt-5">
        it only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        healp you.
      </p>
      <form action="" className="mt-10 flex flex-col">
        <input
          type="text"
          placeholder="email@example.com"
          className="bg-white text-gray-400 p-5 rounded-4xl"
        />
        <Btn name={"Get Started For Free"} />
      </form>
    </section>
  );
}

export default Form;
