import React, { useState, Fragment } from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import './style.scss';

const LoginPage = (props) => {
    const navigate = useNavigate();

    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === value.email && storedUser.password === value.password) {
                toast.success('Inicio de sesión exitoso!');
                navigate('/');  
            } else {
                toast.error('Correo o contraseña incorrectos!');
            }
        } else {
            validator.showMessages();
            toast.error('No se permiten espacios vacios!');
        }
    };

    return (
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <Grid className="loginWrapper">
                <Grid className="loginForm">
                    <h2>Inicia sesión</h2>
                    <p>Entrá a tu cuenta</p>
                    <form onSubmit={submitForm}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="E-mail"
                                    value={value.email}
                                    variant="outlined"
                                    name="email"
                                    label="E-mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('email', value.email, 'required|email')}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className="inputOutline"
                                    fullWidth
                                    placeholder="Contraseña"
                                    value={value.password}
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                    label="Contraseña"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                />
                                {validator.message('password', value.password, 'required')}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid className="formAction">
                                    <FormControlLabel
                                        control={<Checkbox checked={value.remember} onChange={rememberHandler} />}
                                        label="Recordarme"
                                    />
                                    <Link to="/forgot-password">Olvidaste tu contraseña?</Link>
                                </Grid>
                                <Grid className="formFooter">
                                    <Button fullWidth className="cBtnTheme" type="submit">Inicia sesión</Button>
                                </Grid>
                                <p className="noteHelp">¿No tenes una cuenta? <Link to="/register">Registrate</Link></p>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default LoginPage;


