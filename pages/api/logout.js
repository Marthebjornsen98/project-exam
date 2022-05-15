import { destroyCookie } from "nookies";
import nookies from "nookies";
import Link from "next/link";
import { Nav } from "../../components/header/header.style";

export default async (req, res) => {
  destroyCookie({ res }, "jwt", {
    path: "/",
  });

  res.status(200).end();
};
