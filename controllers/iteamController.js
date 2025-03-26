const Iteam = require('../models/iteamModel');

exports.iteamRegistraction = async (req, res, next) => {

    console.log('working =======================>');
    

    const { name, price ,category , description   } = req.body;


    try {

        const iteam = await Iteam.create({
            name: name,
            price: price,
            category: category, 
            description: description
        })

         console.log(iteam);

        if (!iteam) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }

        res.status(201).json({
           success: true,
           message: "Iteam adding successfully completed!",
           iteam
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

    // console.log(name);
    // console.log(email);
    // console.log(password);
}


exports.getIteam = async (req, res, next) => {

    console.log('working getIteam function =========================>');

    const { category } = req.query;
    console.log(category);

    try {

        const getIteam = await Iteam.find({ category: category });
        // console.log(getEnamel);

        if (!getIteam) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }

        res.status(201).json({
            success: true,
            message: "Iteam listing successfully completed!",
            getIteam
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        })
    }

}


exports.deleteIteam = async (req, res, next) => {

    try {

        const { id } = req.query;
        console.log(id);

        const deleteIteam = await Iteam.findByIdAndDelete(id);
        console.log(deleteAccount);

        if (!deleteIteam) {
            return res.status(500).json({
                success: false,
                message: "invaild credentials!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Iteam deleted.............!"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        })
    }

}