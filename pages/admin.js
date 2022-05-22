import nookies, { parseCookies } from "nookies";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BaseUrl } from "../libs/baseUrl";

// Images & icons
import logo from "../public/assets/holidaze-logo.svg";
import { Icon } from "@iconify/react";

// Components
import Holidazes from "../components/admin/holidazes";
import Messages from "../components/admin/messages";
import Enquiries from "../components/admin/enquiries";
import AddHotel from "../components/admin/addHotel";

// Styles
import { AdminPage } from "../styles/admin.style";

const Admin = ({ holidazes, messages, enquiries, jwt }) => {
  const Router = useRouter();
  const [ifHotels, setIfHotels] = useState(true);
  const [ifEnquiries, setIfEnquiries] = useState(false);
  const [ifMessages, setIfMessages] = useState(false);
  const [ifOpen, setIfOpen] = useState(false);

  const hotelHandler = () => {
    setIfHotels(true);
    setIfEnquiries(false);
    setIfMessages(false);
  };

  const enquiriesHandler = () => {
    setIfHotels(false);
    setIfEnquiries(true);
    setIfMessages(false);
  };

  const MessagesHandler = () => {
    setIfHotels(false);
    setIfEnquiries(false);
    setIfMessages(true);
  };

  const NewHotelHandler = () => {
    setIfOpen(true);
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      Router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta
          name="description"
          content="Here you can add, edit and delete hotels. We hope you find the room you are looking for. Dont hesitate to contact us if you have any questions."
        />
        <title>Admin</title>
      </Head>

      <AdminPage>
        <div className="adminPage__header">
          <a href="/">
            <Image
              src={logo}
              width={138}
              height={43}
              alt="Holidaze logo in green"
            />
          </a>
          <button className="cta__grass hvr-grow" onClick={logout}>
            Log out
          </button>
        </div>
        <div className="admin">
          <div className="admin__cta">
            <div className="admin__cta--categories">
              <button
                className={
                  ifHotels
                    ? "cta__forest hvr-grow"
                    : "cta__sage--admin hvr-grow"
                }
                onClick={() => setIfHotels(hotelHandler)}
              >
                Hotels
              </button>
              <button
                className={
                  ifEnquiries
                    ? "cta__forest hvr-grow"
                    : "cta__sage--admin hvr-grow"
                }
                onClick={() => setIfEnquiries(enquiriesHandler)}
              >
                Enquiries
              </button>
              <button
                className={
                  ifMessages
                    ? "cta__forest hvr-grow"
                    : "cta__sage--admin hvr-grow"
                }
                onClick={() => setIfMessages(MessagesHandler)}
              >
                Messages
              </button>
            </div>

            <button
              className="admin__cta--add cta__forest hvr-grow"
              onClick={() => setIfOpen(NewHotelHandler)}
            >
              Add hotel
              <Icon icon="fa6-solid:plus" className="admin__cta--icon" />
            </button>
          </div>

          <div>
            {ifHotels && (
              <Holidazes
                holidazes={holidazes}
                jwt={jwt}
                setIfHotels={setIfHotels}
              />
            )}

            {ifEnquiries && (
              <Enquiries
                enquiries={enquiries}
                setIfEnquiries={setIfEnquiries}
              />
            )}

            {ifMessages && (
              <Messages messages={messages} setIfMessages={setIfMessages} />
            )}

            {ifOpen && <AddHotel setIfOpen={setIfOpen} jwt={jwt} />}
          </div>
        </div>
      </AdminPage>
    </>
  );
};

export default Admin;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const jwt = parseCookies(ctx).jwt;
  let user = null;

  const holidazes = await axios.get(BaseUrl + "holidazes");
  const enquiries = await axios.get(BaseUrl + "hotel-messages");
  const messages = await axios.get(BaseUrl + "contact-messages");

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get(BaseUrl + "users/me", {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      user,
      jwt,
      holidazes: holidazes.data,
      enquiries: enquiries.data,
      messages: messages.data,
    },
  };
};
