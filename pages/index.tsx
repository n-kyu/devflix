import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <h1 className="text-8xl text-red-200">Devflix test</h1>
            <Link
                className="text-6xl text-red-700 cursor-pointer hover:text-red-950 transition"
                href="/auth"
            >
                click to Login page
            </Link>
        </>
    );
}
