const recoverPublicKey = require("./recoverPublicKey");
const {keccak256} = require("ethereum-cryptography/keccak");

const recoverAddress = async (message) => {
    const publicKey = await recoverPublicKey(message);
    const key = publicKey.slice(1);
    const hashedKey = keccak256(key);
    const address = hashedKey.slice(-20);
}

recoverAddress(process.env.MESSAGE);