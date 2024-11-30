
const Booking = require('../models/Booking'); 
const { sendEmail } = require('../services/emailService');   

exports.createBooking = async (req, res) => {
  try {
    const { name, phone, person, reservationDate, time, message } = req.body;

    const newBooking = new Booking({
      name,
      phone,
      person,
      reservationDate,
      time,
      message,
    });

    await newBooking.save();

    res.status(200).json({ success: true, message: 'Booking created successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.regcreateBooking = async (req, res) => {
  try {
    const { name, phone, person, reservationDate, time, message, email } = req.body;

    const newBooking = new Booking({
      name,
      phone,
      person,
      reservationDate,
      time,
      message,
      email,
    });

    await newBooking.save();

     
    await sendEmail(email, name, reservationDate, time, person, message);

    res.status(200).json({ success: true, message: 'Booking created successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
exports.getBookings = async (req, res) => {
    try {
      const bookings = await Booking.find(); 
      res.status(200).json({ success: true, data: bookings });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };

  exports.deleteBooking = async (req, res) => {
    try {
      const { id } = req.params; 
  
      const booking = await Booking.findByIdAndDelete(id); 
  
      if (!booking) {
        return res.status(404).json({ success: false, message: 'Booking not found' });
      }
  
      
      res.status(200).json({ success: true, message: 'Booking deleted successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };