function SeeFylo() {
  return (
    <section>
      <div>
        <img
          src="/images/illustration-stay-productive.png"
          alt="imagen productive"
        />
      </div>
      <div className="text-white mt-10">
        <h3 className="font-bold text-xl">Stay productive, wherever you are</h3>
        <p className="font-light mt-5">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="font-light my-5 ">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="flex items-center gap-1">
        <a
          href="#"
          className="text-Cyan hover:text-white transition-all duration-300 p-1 border-b-2 "
        >
          See how Fylo works
        </a>
        <span>
          <img src="/images/icon-arrow.svg" alt="icono flecha" />
        </span>
      </div>
    </section>
  );
}

export default SeeFylo;
