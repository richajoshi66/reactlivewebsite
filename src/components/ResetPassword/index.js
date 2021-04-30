import React, {useEffect, useRef, useState} from 'react';
import Layout from "../MyLayout";
import {Link, useLocation} from "react-router-dom";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import AuthService from "../../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <span style={{display: 'block'}} className="form-inlineMessage error">
                This field is required!
            </span>
        );
    }
};
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="text-danger error-msg" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const cPassword = (value, props, components) => {
    if (value !== components['password'][0].value) { // components['password'][0].value !== components['confirm'][0].value
        return <span className="error">Passwords are not equal.</span>
    }
};
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function ResetPassword(props) {
    let query = useQuery();
    const form = useRef();
    const checkBtn = useRef();
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangeCPassword = (e) => {
        const cpassword = e.target.value;
        setCPassword(cpassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.resetPassword(query.get("email"), password).then((response) => {
                    setMessage(response.message);
                    setLoading(false);
                    // props.history.push("/login");
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };
    return (
        <Layout>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumb">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Reset Password</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="forget_page_Mn">
                <div className="container">
                    <div className="page_heading text-center">
                        <h1>Reset your password</h1>
                    </div>
                    <div className="form-content_text text-center">
                        <p>We will send you an email to reset your password.</p>
                    </div>
                    <div className="forget_page_wrapper">
                        <Form onSubmit={handleSubmit} ref={form}>
                            <div className="forget_form form_Mn">
                                <div className="form-field">
                                    <label className="form-label" htmlFor="reg_pass">New Password<span>*</span></label>
                                    <Input
                                        type="password"
                                        className="form-input"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>
                                <div className="form-field">
                                    <label className="form-label" htmlFor="reg_confirm_pass">Confirm
                                        Password<span>*</span></label>
                                    <Input
                                        type="password"
                                        className="form-input"
                                        name="cpassword"
                                        value={cpassword}
                                        onChange={onChangeCPassword}
                                        validations={[required, cPassword]}
                                    />
                                </div>
                                <div className="form-actions text-center">
                                    <button className="button btn-secondry" name="button" disabled={loading}>
                                        {loading && (
                                            <i className="fa fa-spinner fa-spin" aria-hidden="true"/>
                                        )}
                                        <span>Submit</span>
                                    </button>
                                </div>
                                {message && (
                                    <div className="form-group">
                                        <span style={{display: 'block'}} className="form-inlineMessage error text-center">
                                            {message}
                                         </span>
                                    </div>
                                )}
                                <CheckButton style={{display: "none"}} ref={checkBtn}/>
                                <div className="form-actions-alredy-customer text-center">
                                    <p className="alredy-customer-link">Already have an account? <Link to="/login">Log In</Link></p>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default ResetPassword;
