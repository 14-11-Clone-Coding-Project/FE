import instance from "../../axios/instance";

const login = async (users) => {
  try {
    const response = await instance.post("member/login", users);
    const token = response.headers.get("access_key").split(" ")[1];
    const memberId = response.data.data;
    return { response, token, memberId };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { login };
