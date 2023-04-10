const productModel = require("../model/productModel")



const getProducts = async function (req, res) {
    try {

        const getProducts = await productModel.find();
        if (!getProducts) {
            return res.status(404).send({ status: false, message: "This product is not found" });
        }
        return res.status(200).send({ status: true, message: "Success", data: getProducts });


    } catch (error) {
        res.status(500).send({ status: "false", message: error.message })
    }
}







module.exports = {  getProducts }