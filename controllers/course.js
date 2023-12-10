const {Course} = require('../models/');

console.log({Course})
module.exports = {
    registerCourse: async (req,res) => {
      try { 
        let {title, description, estimatedTime, materialsNeeded, coursePersonId} = req.body;


        let course = await Course.create({
            title,
            description,
            estimatedTime,
            materialsNeeded,
            coursePersonId,
        });

        return res.status(201).json({
            message: 'Course created successfully',
            course,
        })
    } catch (err){
        return res.status(400).json({
            message: 'Course creation failed',
            error: err.message,
        })
    }
},

getAllCourses: async (req, res) =>{
    try {
        const courses = await Course.findAll({
                    attributes: ['id', 'title', 'description', 'materialsNeeded', 'estimatedTime',  'coursePersonId'],
                    order: [['id', 'DESC']]
                    });
        return res.status(200).json({ courses });
} catch (err) {
    res.status(400).json({err})}
},

}