import createUserService from "../../services/users/createUser.service";

const createUserController = async (req, res) => {
  try {
    const data = req.body;
    const user = await createUserService(data);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createUserController;
