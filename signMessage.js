const hashMessage = require("./hashMessage");
const secp = require("ethereum-cryptography/secp256k1");
const dotenv = require("dotenv").config();

const signMessage = async (message) => {
    const hashedMessage = hashMessage(message);
    const signedHash = await secp.sign(hashedMessage,process.env.PRIVATE_KEY,{recovered:true});
    

    return signedHash;
}


module.exports = signMessage;