import React, {useState, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";


import './style.scss';

const SignUpPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        Email: '',
        Nombre_Completo: '',
        Password: '',
        Confirmá_password: '',
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                Email: '',
                Nombre_Completo: '',
                Password: '',
                Confirmá_password: '',
            });
            validator.hideMessages();
            toast.success('Registro exitoso!');
            push('/login');
        } else {
            validator.showMessages();
            toast.error('Te quedan espacios vacios!');
        }
    };
    return (
        <Fragment>
      <Navbar hClass={"header-style-2"} />
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>Registrate</h2>
                <p>Crea tu cuenta</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Nombre Completo"
                                value={value.Nombre_Completo}
                                variant="outlined"
                                name="Nombre_Completo"
                                label="Nombre"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.Nombre_Completo, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.Email}
                                variant="outlined"
                                name="Email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.Email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="*******"
                                value={value.Password}
                                variant="outlined"
                                name="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('Password', value.Password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="*******"
                                value={value.Password}
                                variant="outlined"
                                name="Confirmá_password"
                                label="Confirmá tu Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.Confirmá_password, `in:${value.Password}`)}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Registrate</Button>
                            </Grid>
                        
                            <p className="noteHelp">¿Ya tenes una cuenta? <Link to="/login">Inicia Sesión</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
               
            </Grid>
        </Grid>
        <Footer />
        <Scrollbar/>
        </Fragment>
    );
};

export default SignUpPage;