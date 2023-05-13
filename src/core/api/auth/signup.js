import instance from "../../axios/instance";

const duplicateId = async (memberId) => {
  try {
    const response = await instance.post("member/checkId", memberId);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const signup = (users) => {
  try {
    const response = instance.post("member/signup", users);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { duplicateId, signup };
