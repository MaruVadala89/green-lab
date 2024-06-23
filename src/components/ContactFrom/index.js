import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        Nombre: '',
        Email: '',
        Asunto: '',
        Apellido: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.Nombre] = ''

        this.setState({
            [e.target.Nombre]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { Nombre,
            Email,
            Asunto,
            Apellido,
            events,
            notes, error } = this.state;

        if (Nombre === '') {
            error.Nombre = "Escribí tu nombre";
        }
        if (Email === '') {
            error.Email = "Escribí tu email";
        }
        if (Asunto === '') {
            error.Asunto = "Asunto";
        }
        if (Apellido === '') {
            error.Apellido = "Escribi tu apellido";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.Nombre === '' && error.Email === '' && error.Email === '' && error.Apellido === '' && error.Asunto === '' && error.events === '' && error.notes === '') {
            this.setState({
                Nombre: '',
                Email: '',
                Asunto: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {
        const { Nombre,
            Email,
            Asunto,
            Apellido,
            error } = this.state;

        return (
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={Nombre} onChange={this.changeHandler} type="text" Nombre="Nombre" placeholder="Nombre" />
                            <p>{error.Nombre ? error.Nombre : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={Apellido} onChange={this.changeHandler} type="text" Nombre="Apellido" placeholder="Apellido" />
                            <p>{error.Apellido ? error.Apellido : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={Email} type="email" Nombre="Email" placeholder="Email" />
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={Asunto} type="text" Nombre="Asunto" placeholder="Asunto" />
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="Mensaje" placeholder="Mensaje"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Enviar mensaje</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default ContactForm;