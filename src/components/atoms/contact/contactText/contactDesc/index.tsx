import Link from "next/link";

const ContactDesc = () => {
  const link = "underline font-bold hover:text-sky-600";

  return (
    <div className="flex justify-center mt-1 w-full sm:w-[90%] md:w-[70%]  items-center flex-col">
      <p className="leading-relaxed text-center">
        If you want to know me more, or just to say Hi, the best way to contact
        me is via{" "}
        <Link href="https://t.me/pempek_kapal_selem" passHref>
          <a className={link}>Telegram</a>
        </Link>
        (yeah, mostly active in Telegram), or you can send friendlist to my{" "}
        <Link href="https://facebook.com/kelgfx" passHref>
          <a className={link}>Facebook</a>
        </Link>{" "}
        and follow my{" "}
        <Link href="https://github.com/haikelz" passHref>
          <a className={link}>Github</a>
        </Link>
      </p>
    </div>
  );
};

export default ContactDesc;
