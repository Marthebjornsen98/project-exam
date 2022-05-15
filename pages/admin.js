import nookies from "nookies";

const Admin = () => {
  const Router = useRouter();
  const {
    user: { email, username },
  } = props;

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      Router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
};

export default Admin;

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get("http://localhost:1337/users/me", {
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
    },
  };
};
