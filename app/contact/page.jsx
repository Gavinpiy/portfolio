import Header from "@/components/Header";
const Contact = () => {
  return (
    <>
      <Header />
      <section
        id="contact"
        className="flex flex-col items-center justify-center w-full h-screen bg-gray-200"
      >
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-xl">Get in touch.</p>
        <div className="flex gap-4">
          <a
            href="mailto:gavin.yip88@gmail.com"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/gavin-yip"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
