import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className="flex justify-center items-center p-28 h-full font-montserrat gap-10">
        <Image
          src="/images/placeholder.jpg"
          alt="Picture"
          width={500}
          height={500}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
          rutrum quisque non tellus. Gravida rutrum quisque non tellus orci ac
          auctor. Ut enim blandit volutpat maecenas. Ut ornare lectus sit amet.
          Vestibulum lectus mauris ultrices eros in cursus turpis massa
          tincidunt. Leo vel orci porta non pulvinar neque. Ornare arcu odio ut
          sem nulla pharetra diam sit amet. Mauris in aliquam sem fringilla.
          Dignissim enim sit amet venenatis urna. Viverra aliquet eget sit amet
          tellus cras adipiscing enim eu. Risus feugiat in ante metus dictum at
          tempor. Integer eget aliquet nibh praesent tristique magna sit amet
          purus. Purus sit amet luctus venenatis. Id diam maecenas ultricies mi
          eget mauris pharetra et. Quisque sagittis purus sit amet. Ipsum dolor
          sit amet consectetur adipiscing elit duis tristique sollicitudin.
          Vitae aliquet nec ullamcorper sit amet. Iaculis at erat pellentesque
          adipiscing. Netus et malesuada fames ac turpis egestas maecenas
          pharetra. Vitae auctor eu augue ut. Cursus turpis massa tincidunt dui.
          Sagittis vitae et leo duis ut diam quam. Bibendum enim facilisis
          gravida neque. Nisi lacus sed viverra tellus in hac. Nisi scelerisque
          eu ultrices vitae. Pellentesque elit eget gravida cum sociis natoque
          penatibus et.
        </p>
      </main>
    </>
  );
};

export default Home;
