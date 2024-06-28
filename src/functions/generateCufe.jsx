const cufeGenerator = async (numFact) => {
  const CUIT = "XXXXFACTURAPRUEBAXXXXX";
  const emitionDate = new Date();

  const cufeCreator = `${CUIT}${numFact}${emitionDate}`;
  
  const encoder = new TextEncoder();
  const data = encoder.encode(cufeCreator);
  
  const hashBuffer = await window.crypto.subtle.digest('SHA-512', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
};

export default cufeGenerator;
