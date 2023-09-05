import AsyncHandler from "express-async-handler";
//@desc : Auth user & token
// route : POST /api/users/auth
//access : public
const authUser = AsyncHandler (async (req,res) => {
    res.status(200).json({message: 'Auth user'})
});

//@desc : register new user
// route : POST /api/users
//access : public
const registerUser = AsyncHandler (async (req,res) => {
    res.status(200).json({message: 'Register user'})
});
//@desc : Logout user
// route : POST /api/users/logout
//access : public
const logoutUser = AsyncHandler (async (req,res) => {
    res.status(200).json({message: 'logout user'})
});
//@desc : get user profile
// route : GET /api/users/profile
//access : private
const getUserProfile = AsyncHandler (async (req,res) => {
    res.status(200).json({message: ' user profile'})
});
//@desc : update user profile
// route : PUT /api/users/profile
//access : private
const updateUserProfile = AsyncHandler (async (req,res) => {
    res.status(200).json({message: 'update user profile'})
});

export{
    authUser, 
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};