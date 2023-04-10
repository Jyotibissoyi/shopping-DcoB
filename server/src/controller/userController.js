const Pool = require('pg').Pool
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'Jyoti25@',
    port: 2025
})

const createUser = async (req, res) => {
    try {
        let { name, email, phone, password } = req.body

        const saltedPassword = await bcrypt.hash(password, 10);

        pool.query(
            "INSERT INTO users (name,email,phone,password) VALUES ($1,$2,$3,$4) RETURNING * ",
            [name, email, phone, saltedPassword],
            (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: false,
                        message: err.message
                    })
                }

                const userData = result.rows[0]

                return res.status(201).json({
                    status: true,
                    message: 'User created successfully.',
                    data: userData
                })

            }
        )
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}


const login = async (req, res) => {
    try {
        const data = req.body;
        if (Object.keys(data).length == 0)
            return res.status(400).send({
                status: false,
                message: "Pls provide the Email-id and password",
            });
        const { email, password } = data;
        if (!email) {
            return res.status(400).send({
                status: false,
                message: "Pls provide the emailId"
            });
        }
        if (!password) {
            return res.status(400).send({
                status: false,
                message: "Pls provide the password"
            });
        }

        pool.query('SELECT * FROM users WHERE email=$1',
            [email],
            async (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: false,
                        message: err.message
                    })
                }
                const userData = result.rows[0]

                const checkpasword = await bcrypt.compare(password, userData.password);

                if (!checkpasword) {
                    return res.status(400).send({ message: "Invalid password" });
                }

                let token = jwt.sign(
                    {
                        userId: userData.id.toString(),
                    },
                    "strongpassword",
                    { expiresIn: "12h" }
                );

                return res.status(200).send({
                    status: true,
                    message: "User login successfull",
                    userId: { userId: userData.id, token: token },
                });
            }
        )

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }
}




module.exports = {
    createUser, login
}