const generateId = () => {
  let uid = crypto.randomUUID();
  return uid.slice(0, 18);
};
module.exports = generateId;
