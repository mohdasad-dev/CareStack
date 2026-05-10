import jwt from 'jsonwebtoken';


// doctor authentication middleware 

const authDoctor = async (req, res, next) =>{
    try {
        
        const {dtoken} = req.headers
        if(!dtoken){
            return res.json({success:false, message:'Not Authorized Login Again'});
        }

        // veify the token so first we decode

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
        // Add this line to prevent the "undefined" error
        req.body = req.body || {}; 

        req.body.docId = token_decode.id;        
        next();
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
} 

export default authDoctor;