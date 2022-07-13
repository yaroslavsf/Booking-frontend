import { Navigate } from "react-router-dom";
import { useState } from 'react'
import { getToken, getUserFromToken } from "./AuthUtilities";
import {PrimaryButton} from './PrimaryButton'
export default function Login() {

    const [form, setForm] = useState({
        login: '',
        password: '',
    })
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('')

    const [token, setToken] = useState(false)

    async function submit(e) {
        e.preventDefault()

        let json = JSON.stringify(form)

        const token = await getToken(json)
        setToken(token)
    }

    function Field({name, ...rest}) {
        function changeField(e) {
            e.preventDefault()
            const newFormState = Object.assign({}, form)
            newFormState[name] = e.target.value
            setForm(newFormState)
        }

        return (<input
            name={name}
            value={form[name]}
            onChange={(e) => changeField(e)}
            {...rest}
        />);
    }
    if (token) {
        const user = getUserFromToken(token)
        // return <Navigate to = "/rooms"/>
        return <div>{user.name}</div>
    }

    return (
        <div className="container col-md-3">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="login">Login:</label>
                    <Field className="form-control" name="login" id="login"/>
                
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password:</label>
                    <Field className="form-control" name="password" id="password"/>
                </div>
                <div className="form-group">
                <PrimaryButton type='submit' text='login' />
                </div>
            </form>
        </div>
    );
}