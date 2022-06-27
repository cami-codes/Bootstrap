// VARIAVEIS LOGIN
var usuario = document.querySelector("#usuario")
var usuarioOk = false
var senha = document.querySelector("#senha")
var senhaOk = false

// VARIAVEIS CADASTRO.
var nome = document.querySelector('#nome')
var nomeOk = false
var usuarioCadastro = document.querySelector('#usuarioCadastro')
var usuarioCadastroOk = false
var senhaCadastro = document.querySelector('#senhaCadastro')
var senhaCadastroOk = false


// FUNÇÕES LOGIN
function validarUsuario() {
    let txtUsuario = document.querySelector('#txtUsuario')
    if (usuario.value.indexOf('@') > 0 && usuario.value.indexOf('.') > 0) {
        txtUsuario.innerHTML = 'E-mail válido!'
        txtUsuario.style.color = "green"
        usuarioOk = true
    } else{
        txtUsuario.innerHTML = 'E-mail inválido!'
        txtUsuario.style.color = "red"
        usuarioOk = false
    }
}

function validarSenha() {
    let txtSenha = document.querySelector('#txtSenha')
    if(senha.value.length < 8){
        txtSenha.innerHTML = 'A senha precisa ter no mínimo 8 caracteres!'
        txtSenha.style.color = 'red'
        senhaOk = false
    } else {
        txtSenha.innerHTML = 'Senha válida!'
        txtSenha.style.color = 'green'
        senhaOk = true
    }
}

function Entrar() {
    if(usuarioOk == true && senhaOk == true) {
        alert('Login sucedido!')
    } else {
        alert('Verifique seus dados e tente novamente.')
    }
}

// FIM DO LOGIN


// FUNÇÕES CADASTRAR
function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validarUsuarioCadastro() {
    let txtUsuarioCadastro = document.querySelector('#txtUsuarioCadastro')
    if (usuarioCadastro.value.indexOf('@') > 0 && usuarioCadastro.value.indexOf('.') > 0) {
        txtUsuarioCadastro.innerHTML = 'E-mail válido!'
        txtUsuarioCadastro.style.color = "green"
        usuarioCadastroOk = true
    } else{
        txtUsuarioCadastro.innerHTML = 'E-mail inválido!'
        txtUsuarioCadastro.style.color = "red"
        usuarioCadastroOk = false
    }
}

function validarSenhaCadastro() {
    let txtSenhaCadastro = document.querySelector('#txtSenhaCadastro')
    if(senhaCadastro.value.length < 8){
        txtSenhaCadastro.innerHTML = 'A senha precisa ter no mínimo 8 caracteres!'
        txtSenhaCadastro.style.color = 'red'
        senhaCadastroOk = false
    } else {
        txtSenhaCadastro.innerHTML = 'Senha válida!'
        txtSenhaCadastro.style.color = 'green'
        senhaCadastroOk = true
    }
}

function Cadastrar() {
    if(nomeOk == true && usuarioCadastroOk == true && senhaCadastroOk == true) {
        alert('Cadastro sucedido!')
    } else {
        alert('Verifique seus dados e tente novamente.')
    }
}


