import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      123
      <Link href="starter">
        <a>starter로 이동 222</a>
      </Link>
    </div>
  );
};

export default Home;
