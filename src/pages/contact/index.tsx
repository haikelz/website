import { FaGithub, FaTelegram, FaFacebook } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <section className="body-font tracking-widest">
        <div className="container mx-auto flex px-5 py-24 h-screen items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="mb-8 leading-relaxed font-bold text-2xl">
              Find me on:{" "}
            </h1>
            <div className="flex justify-center">
              <Link href="https://github.com/haikelz" passHref>
                <p className="cursor-pointer mx-4 hover:text-blue-500 duration-500">
                  <FaGithub />
                </p>
              </Link>
              <Link href="https://t.me/pempek_kapal_selem" passHref>
                <p className="cursor-pointer mx-4 hover:text-blue-500 duration-500">
                  <FaTelegram />
                </p>
              </Link>
              <Link href="https://facebook.com/kelgfx" passHref>
                <p className="cursor-pointer mx-4 hover:text-blue-500 duration-500">
                  <FaFacebook />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
