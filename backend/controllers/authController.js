const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Generate JWT token
const generateToken = (admin) => {
  return jwt.sign(
    { id: admin._id, username: admin.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

// @route   POST /api/auth/login
// @access  Public
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = generateToken(admin);

    res.status(200).json({
      message: 'Login successful',
      token,
      admin: { id: admin._id, username: admin.username },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login', error: error.message });
  }
};

// @route   PUT /api/auth/change-password
// @access  Private (Admin only)
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Current and new password are required' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters long' });
    }

    const admin = await Admin.findById(req.admin.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const isMatch = await admin.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    admin.password = newPassword; // will be hashed by pre-save hook
    await admin.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while changing password', error: error.message });
  }
};

// @route   GET /api/auth/verify
// @access  Private (used by frontend to check if token is still valid)
const verifyToken = async (req, res) => {
  res.status(200).json({ valid: true, admin: req.admin });
};

// @route   GET /api/auth/setup-admin?key=SETUP_SECRET
// @access  Public, but protected by a secret query key (SETUP_SECRET env var)
const setupAdmin = async (req, res) => {
  try {
    const providedKey = req.query.key;

    if (!process.env.SETUP_SECRET || providedKey !== process.env.SETUP_SECRET) {
      return res.status(403).json({ message: 'Forbidden: invalid or missing setup key.' });
    }

    const existingAdmin = await Admin.findOne({ username: process.env.ADMIN_DEFAULT_USERNAME });
    if (existingAdmin) {
      return res.status(200).json({
        message: `Admin account "${process.env.ADMIN_DEFAULT_USERNAME}" already exists. No action taken.`,
      });
    }

    const admin = await Admin.create({
      username: process.env.ADMIN_DEFAULT_USERNAME,
      password: process.env.ADMIN_DEFAULT_PASSWORD,
    });

    res.status(201).json({
      message: `Admin account "${admin.username}" created successfully. Please log in and change the password immediately.`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error while setting up admin.', error: error.message });
  }
};

module.exports = { loginAdmin, changePassword, verifyToken, setupAdmin };
