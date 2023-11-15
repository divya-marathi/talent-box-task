const {Enroller } = require("../models/courseEnrollersModel");



const courseEnrollController = async (req, res) => {

    try {
        console.log(req.body)
        const { name, email, course } = req.body;          
        const enrollment = new Enroller({
          name,
          email,
          course,
        });
    
        
        const savedEnrollment = await enrollment.save();    
        res.status(201).json(savedEnrollment);
      } catch (error) {
        console.error('Error enrolling:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = courseEnrollController