import instance from "../../axios/instance";

const duplicateId = async (memberId) => {
  try {
    const response = await instance.post("member/checkId", memberId);
    return response;
  } catch (error) {
    throw error;
  }
};

const signup = async (users) => {
  try {
    const response = await instance.post("member/signup", users);
    return response;
  } catch (error) {
    throw error;
  }
};

export { duplicateId, signup };
