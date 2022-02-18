import Link from "next/link";

export default function Hero() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 text-center sm:mt-24 md:mt-72 ">
      <h1 className="font-extrabold text-gray-900 ">
        <p className="text-xl sm:text-3xl md:text-4xl ">
          Shopify + Next.js + Tailwind CSS:
        </p>
        <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent sm:text-6xl md:text-7xl">
          Modern eCommerce Store
        </p>
      </h1>
      <h2 className="md:max-x-3xl mx-auto mt-3 max-w-md text-gray-500 sm:text-lg md:mt-5 md:text-xl">
        The eCommerce Revolution.
      </h2>
      <div className="mx-auto mt-5 flex max-w-md items-center justify-center md:mt-8">
        <Link href="#">
          <a className="mr-6 inline-flex h-12 items-center justify-center rounded-md border-transparent bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800">
            Learn More
          </a>
        </Link>
        {/* <Link href="#">
          <a className="inline-flex items-center font-semibold text-gray-800">
            Learn more
          </a>
        </Link> */}
      </div>
    </div>
  );
}
