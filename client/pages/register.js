import { useState } from "react"
import Layout from "../components/Layout"

const Register = () => {

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: "",
    })


    const handleChange = (name) => (e) => {
        setRegisterData({ ...registerData, [name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, emai } = registerData
        console.table({ name, emai })
    }

    const registerForm = () => {
        return (
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your name"
                        value={registerData.name}
                        onChange={handleChange("name")}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your emai"
                        value={registerData.email}
                        onChange={handleChange("email")}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your password"
                        value={registerData.password}
                        onChange={handleChange("password")}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-warning"  >Register</button>
                </div>

            </form>
        )
    }
    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <h1>Register</h1>
                <br />
                {registerForm()}
            </div>
        </Layout>
    )
}
export default Register