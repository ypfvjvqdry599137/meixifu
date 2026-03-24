const COOKIE_NAME = "stat_auth";

exports.handler = async () => {
  return {
    statusCode: 303,
    headers: {
      Location: "/login",
      "Set-Cookie": `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
    },
    body: ""
  };
};
