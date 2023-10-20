function Login(){
    return(
        <div>
            <div className="container_login">
                <div className="infos_login">
                    <h1>Email</h1>
                    <div className="inputD">
                        <input type="text" id='texto'/>
                    </div>
                    <h1>Senha</h1>
                    <div className="inputD">
                        <input type="password" id='senha'/>
                    </div>
                <div className="button_submit">
                    <button type='submit' id='button' className='SignIn'>
                        Entrar
                    </button>
                </div>
                <div className="signUp">
                    <button>
                        Cadastrar
                    </button>
                </div>
                </div>
             </div>
        </div>
    )
}
export default Login;