import { destroyCookie } from "nookies";

export default async function (req, res) {
  destroyCookie({ res }, "jwt", {
    path: "/",
  });

  res.status(200).end();
}
