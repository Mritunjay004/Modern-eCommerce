import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>Modern eCommerce Store</title>
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products }, // will be passed to the page component as props
  };
}
