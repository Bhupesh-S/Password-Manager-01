const Password = require('../models/Password');
const crypto = require('crypto');

// Encryption settings
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16); 

// Encrypt password
const encryptPassword = (password) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`; // Store IV with encrypted password
};

// Decrypt password
const decryptPassword = (encryptedData) => {
  const [ivHex, encrypted] = encryptedData.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

exports.addPassword = async (req, res) => {
  const { website, username, password } = req.body;

  if (!website || !username || !password) {
    return res.status(400).json({ message: 'Website, username, and password are required' });
  }

  try {
    const encryptedPassword = encryptPassword(password);
    const newPass = new Password({
      website,
      username,
      password: encryptedPassword,
      user: req.user.id,
    });
    await newPass.save();
    res.status(201).json({ ...newPass._doc, password }); // Return original password for UI
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save password' });
  }
};

exports.getPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ user: req.user.id });
    // Decrypt passwords before sending
    const decryptedPasswords = passwords.map((item) => ({
      ...item._doc,
      password: decryptPassword(item.password),
    }));
    res.json(decryptedPasswords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch passwords' });
  }
};