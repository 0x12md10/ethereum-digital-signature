const dotenv = require("dotenv").config();
const signMessage = require("./signMessage");
const hashMessage = require("./hashMessage");
const secp = require("ethereum-cryptography/secp256k1");

const recoverPublicKey = async (message) => {
    const hashedMessage = hashMessage(message);
    const signedHash = await signMessage(message);
    const signature = signedHash[0];
    const recoveryBit = signedHash[1];
    const publicKey = secp.recoverPublicKey(hashedMessage,signature,recoveryBit);
    
    return publicKey;
}

module.exports = recoverPublicKey;