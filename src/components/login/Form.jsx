
const Form = ({handleSubmit, setEmail, setPassword, setName, setUsername }) => {
    return (
        <>
            <div className="container">
                <div>
                    <div className="card">
                        <div className="card-header">
                            Registro
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input className="form-control" type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                                    <input className="form-control" type="text" name="username" id="username" onChange={(e)=>{setUsername(e.target.value)}} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Correo</label>
                                    <input className="form-control" type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Contraseña</label>
                                    <input className="form-control" type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}  />
                                </div>
                                <div className="mb-3">
                                    <input className="btn btn-primary" type="submit" value="Registrate" />
                                </div>
                            </form>

                        </div>
                        <div className="card-footer text-muted">
                            Footer
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form