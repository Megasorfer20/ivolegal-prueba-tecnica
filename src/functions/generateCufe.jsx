import crypto from "crypto";

const cufeGenerator = (numFact) => {
  const CUIT = "XXXXFACTURAPRUEBAXXXXX";
  const emitionDate = new Date();

  const cufeCreator = `${CUIT}${numFact}${emitionDate}`;
  return crypto.createHash("sha512").update(cufeCreator).digest("hex");
};

export default cufeGenerator;