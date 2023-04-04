const getAllContacts = (req, res) => {
  res.json({ message: "this is get all contacts" });
};
const postContact = (req, res) => {
  res.json({ message: "this is post contacts" });
};

const getOneContact = (req, res) => {
  res.json({ message: "this is get One contacts" });
};
const putContact = (req, res) => {
  res.json({ message: "this is put contacts" });
};
const deleteContact = (req, res) => {
  res.json({ message: "this is delete contacts" });
};

module.exports = {
  getAllContacts,
  postContact,
  getOneContact,
  putContact,
  deleteContact,
};
