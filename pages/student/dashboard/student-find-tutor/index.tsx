import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Notification from "../../../../components/student/dashboard/student-find-tutor/notifications";
import SearchBar from "../../../../components/student/dashboard/student-find-tutor/search-bar";
import AvailableTutor from "../../../../components/student/homepage/available-tutor";
import Scrollbar from "../../../../components/ui/scrollbar";
import { APIEndpoints } from "../../../../data";
import { DashboardLayout } from "../../../../layouts";
import { useGetUserInfoQuery } from "../../../../redux/slices/apiSlice";
import { UserInfo } from "../../../../types/user";

type Props = {};

const StudentFindTutor = (props: Props) => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    var token;
    const getUserToken = async () => {
      token = await localStorage.getItem("heiloUserToken");
      console.log(token);
    };
    getUserToken();

    const url = `${process.env.apiUrl}${APIEndpoints.studentInfo}/ondemand?gender=${gender}&subject=${subject}`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setUsers(data.data.result));
  }, [gender, subject]);

  const getGender = (e: any) => {
    setGender(e.target.value);
  };
  const getSubject = (e: any) => {
    setSubject(e.target.value);
  };
  return (
    <div>
      <Head>
        <title>Edit Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardLayout>
        <section className="grid grid-cols-12 gap-16">
          <div className="col-span-8">
            <SearchBar getGender={getGender} getSubject={getSubject} />
            <div>
              <Scrollbar style={{ height: "calc(75vh - 100px)" }}>
                <div className="px-6">
                  {users &&
                    users.map((user) => (
                      <AvailableTutor key={user?._id} user={user} />
                    ))}
                </div>
              </Scrollbar>
            </div>
          </div>
          <div className="col-span-4 mt-24 bg-bgAccent px-6 rounded-2xl h-fit">
            <h1 className="text-primaryDark text-md capitalize mt-2">
              notifications
            </h1>
            <Scrollbar style={{ height: "calc(80vh - 100px)" }}>
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </Scrollbar>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default StudentFindTutor;
