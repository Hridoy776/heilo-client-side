import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import { BannerSection } from "../components";
import { HomepageLayout } from "../layouts";
import { useGetUserInfoQuery } from "../redux/slices/apiSlice";

export default function Home() {
  const { data: session } = useSession();
  // !!!!! We Need this to get the User Info
  // const { data, error, isLoading, isFetching, isSuccess } =
  //   useGetUserInfoQuery();

  // console.log(data);
  return (
    <div>
      <Head>
        <title>Heilo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomepageLayout>
        <BannerSection />
      </HomepageLayout>
    </div>
  );
}
