import React , {useRef,useState} from 'react'
import {Form , Button , Card, Alert } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
function Signup() {
   
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [loading , setLoading] = useState(false)
const [err , setErr] = useState('')

 async function handelSubmit(e){
    e.preventDefault()


    if(passwordRef.current.value !== passwordConfirmRef.current.value)
       return setErr("Password do not match")

try{
    setErr("")
    setLoading(true)
    await signup(emailRef.current.value , passwordRef.current.value)
} catch{
    setErr("Failed to create an account")
}
setLoading(false)

}
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
    {err && <Alert variant="danger">{err}</Alert>}
            <Form onSubmit={handelSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
       <Button disabled={loading} className="w-100" type="submit">Sign-Up</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account ?<Link to="/login"> Log In</Link>
        </div>
        </>
    )
}

export default Signup
