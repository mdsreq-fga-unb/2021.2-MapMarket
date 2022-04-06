import React from 'react'

function CadastroClient(){
    return(

        <div className='main'>
            <header>
                <meta charSet='UTF-8'/>
                <link rel='stylesheet' href='../Styles/main.css'/>
            </header>
            <body>
                <div className='cadastroCliente'>
                    <h1>Cadastro</h1>
                    <form>
                        <label for='nome'>Nome:</label><br/>
                        <input type='text' id='nome' name='nome'></input>
                        <label for='email'>Email:</label><br/>
                        <input type='text' id='email' name='email'></input>
                        <label for='fconfEmail'>Confirmar email:</label><br/>
                        <input type='text' id='fconfEmail' name='fconfEmail'></input>
                        <label for='cpf'>CPF:</label><br/>
                        <input type='number' id='cpf' name='cpf'></input>
                        <label for='telefone'>Telefone:</label><br/>
                        <input type='number' id='telefone' name='telefone'></input>
                        <label for='cep'>CEP:</label><br/>
                        <input type='number' id='cep' name='cep'></input>
                        <label for='cidade'>Cidade:</label><br/>
                        <input type='text' id='cidade' name='cidade'></input>
                        <label for='bairro'>Bairro:</label><br/>
                        <input type='text' id='bairro' name='bairro'></input>
                        <label for='numero'>Número:</label><br/>
                        <input type='number' id='numero' name='numero'></input>
                        <label for='complemento'>Complemento:</label><br/>
                        <input type='text' id='complemento' name='complemento'></input>
                        <label for='senha'>Senha:</label><br/>
                        <input type='text' id='senha' name='senha'></input>
                        <label for='fconfSenha'>Confirmar Senha:</label><br/>
                        <input type='text' id='fconfSenha' name='fconfSenha'></input>
                    </form>
                    <div className='botoes'>
                        <button className='btnCadastrar'>Cadastrar</button>
                    </div>
                </div> 
            </body>
            <footer>
                <h3>© Copyright  MapMarket - All Rights Reserved</h3>
            </footer>    
        </div>
        
    )
}

export default CadastroClient