import express from 'express';
import { createTransport } from 'nodemailer';
import cors from "cors";
const app = express();
app.use(cors({
    origin: 'http://localhost:3000/', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed HTTP methods
    preflightContinue: false,
    optionsSuccessStatus: 204,
}))

app.get('/api/data', (req, res) => {
    res.send("The Data Done")
});

// Define a route to send the registration email
app.post('http://localhost:3000/api/send-registration-email', (req, res) => {
    const registrationData = req.body;

    // Create a Nodemailer transporter with your email service credentials
    const transporter = createTransport({
        service: 'Gmail', // e.g., 'Gmail'
        auth: {
            user: 'saurabh.mhatre711@gmail.com', // Your email address
            pass: 'Saurabh#2003', // Your email password
        },
    });

    // Define the email content and recipient
    const mailOptions = {
        from: 'saurabh.mhatre711@gmail.com',
        to: registrationData.email, // The recipient's email
        subject: 'Registration Confirmation',
        text: `Hello ${registrationData.name},\nThank you for your registration into the Course`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email error:', error);
            res.status(500).send('Email sending failed');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(404).send('Email sent successfully');
        }
    });
});

// Start your Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
