import Signup from "@/components/signup/Signup";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

const signup = () => {
  return (
    <>
      <Head>
        <title>Create account</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </>
  );
};

// === SERVER-SIDE REDIRECT IF USER IS AUTHENTICATED ===
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return { redirect: { destination: "/", permanent: false } };
  }
  return { props: { session } };
};

export default signup;
