const User = require("../models/userSchema");
const bcryptjs = require('bcryptjs');

exports.signup = async (req,res) =>{
    try{
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            })
        }
        


        // if (!fullname || !password || !email) {
        //     return res.status(400).json({ error: 'Please fill all the details' });
        // }
      
        const hashpassword = await bcryptjs.hash(password, 10);
        // console.log(password);
        // console.log(hashpassword);
        
        const createdUser = new User({
            fullname,
            email,
            password: hashpassword,
        })
        // console.log(createdUser.password);
      
        await createdUser.save();
        res.status(201).json({
            success: true,
            message:"User Registred Successfully",
        })
    }
    catch(err){
  
        console.log(err)
        res.status(500).json({
            success: false,
            message:"Error while registring User",
        })
    }
}



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

   
        const user = await User.findOne({ email });

      
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
       

        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "User does not exist or incorrect password"
            });
        }

        res.status(200).json({
            success: true,
            message: "User Login Successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "User Login Failed"
        });
    }
};