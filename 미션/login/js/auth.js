export const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

export function authenticate({ email, password }) {
  const user = USER_DATA.find((userObject) => {
    return userObject.email === email;
  });
  if (!user) {
    return { ok: false, reason: "email_not_found" };
  }
  if (user.password !== password) {
    return { ok: false, reason: "password_mismatch" };
  }
  return { ok: true };
}
