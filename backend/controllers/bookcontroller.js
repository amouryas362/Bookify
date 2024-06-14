const Book = require("../models/bookSchema");

exports.getBook = async (req,res) =>{
    try{
        const book = await Book.find();
        res.status(200).json({
            success: true,
            data: book,            
        })
    }
    catch(err){
        console.log("Error in fetching book from db",err);
        res.status(500).json({
            success: false,

        })
    }
}