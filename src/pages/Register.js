import React from 'react'

const Register = () => {
    return (
        <>
            <main className="form-signin">
                <form>
                    <img className="mb-4" src="/img/logo.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                       
                            <input type="password" className="form-control"  placeholder="Confirm Password" /> 
                            <label htmlFor="floatingPassword2">Confirm Password </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>

            <style jsx="true">
                {`
                    .form-signin {
                        width: 100%;
                        max-width: 330px;
                        padding: 15px;
                        margin: auto;
                    }

                    .form-signin .checkbox {
                        font-weight: 400;
                    }

                    .form-signin .form-floating:focus-within {
                        z-index: 2;
                    }

                    .form-signin input[type="email"] {
                        margin-bottom: -1px;
                        border-bottom-right-radius: 0;
                        border-bottom-left-radius: 0;
                    }

                    .form-signin input[type="password"] {
                        margin-bottom: 10px;
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    }
                `}
            </style>
        </>
    );
};

export default Register;
