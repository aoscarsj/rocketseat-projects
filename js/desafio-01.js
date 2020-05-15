var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

var texto = document.querySelector("#texto");
// texto.textContent = ex_01(endereco);

// pares(33, 321);

var skills = ["Javascript", "ReactJS", "React Native"];
// console.log(temHabilidade(skills));

var anosEstudado = 7;
// console.log(experiencia(anosEstudado));

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

printUsers(usuarios);

function printUsers(usuarios){
    // ou for(let usuario of usuarios)
    usuarios.forEach(usuario => {
        
       var info = "O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(", ");
              
       console.log(info);
       
        
    });
}

function experiencia(anos){
    var nivel = "";
    
    if(anos < 0)
        nivel = "valor invalido";
    else{
        if(anos <= 1)
            nivel = "Iniciante";
        else if(anos <= 3)
            nivel = "Intermediário";
        else if(anos <= 6)
            nivel = "Avançado";
        else
            nivel = "Jedi Master";
    }
    return nivel;
}


function temHabilidade (skills){    
    var temJS = false
    skills.forEach(element => {
        if(element == 'Javascript'){
            temJS = true
            return
        } 
    });
    return temJS
}

function pares(x, y) {
    if(x%2 != 0) x++;
    for(x ; x <=y ; x+=2)
        console.log(x);
        
}

function ex_01(endereco){
    var end = ("O usuário mora em " + endereco.cidade + 
    " / " + endereco.uf + ", no bairro " + endereco.bairro +
    ", na rua \"" + endereco.rua +"\" com o nº " + endereco.numero);
    return end;
}