import Head from "next/head";
import { Message_data } from "@/context/context";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Home() {
  const { message, setMessage } = useContext(Message_data);

  const router = useRouter();

  function sendData() {
    const gonderilecekMesaj = "Hello world";
    setMessage(gonderilecekMesaj);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div style={{ marginTop: "50px" }}>
          <button onClick={() => router.push("/share")}>
            Second Component
          </button>
        </div>

        <button onClick={() => sendData()} style={{ marginTop: "50px" }}>
          Send Message
        </button>
      </header>
    </>
  );
}
