import mongoose from "mongoose";
const DatabseConnected = async () => {
    try {
        let connected = await mongoose.connect('mongodb+srv://admin:umlUwPYP5tv3qvTj@cluster0.w1saqqf.mongodb.net/?retryWrites=true&w=majority');
        console.log("Database connected successfully")
    }
    catch (error) {
        console.log("err", error)
    }
}
export default DatabseConnected