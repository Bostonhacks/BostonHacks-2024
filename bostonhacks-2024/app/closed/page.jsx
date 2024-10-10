import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const ApplicationsClosed = () => {
  return (
    <main>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Applications Closed - BostonHacks</title>
        <meta name="description" content="Applications for the hackathon are closed" />
      </Head>
      
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-white mb-5">Applications Closed</h1>
        <p className="text-2xl text-white">
          Thank you for your interest in BostonHacks! Unfortunately, applications for this season are now closed.
        </p>
        <p className="text-xl text-white mt-5">
          Please check back next year for more opportunities!
        </p>
      </div>
    </div>
    </main>
  );
};

export default ApplicationsClosed;
