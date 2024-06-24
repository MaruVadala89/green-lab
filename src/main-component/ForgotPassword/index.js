import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, useNavigate} from "react-router-dom";

import './style.scss';

const ForgotPassword = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
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
                email: '',
            });
            validator.hideMessages();
            toast.success('Has iniciado sesión!');
            push('/login');
        } else {
            validator.showMessages();
            toast.error('Has dejado espacios vacios!');
        }
    };
    return (
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>¿Olvidaste tu contraseña?</h2>
                <p>Crea una nueva</p>
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
                     
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Crea una nueva constraseña</Button>
                            </Grid>
                            
                            <p className="noteHelp">¿Tenes tu cuenta y clave? <Link to="/login">Incia sesión</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            
            </Grid>
        </Grid>
    )
};

export default ForgotPassword;