let alunos1 = {//Cadastro de alunos
    nome: "Andrey",
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2024-02-05", "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09"],
    ra: 3782946
}
console.log(alunos)//Mostrar registro
let alunos2 = {//Cadastro de alunos
    nome: "Caio Almeida da Silva",
    idade: 20,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2024-02-05", "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09"],
    ra: 1252780
}
console.log(alunos2)//Mostrar registro
let alunos3 = {//Cadastro de alunos
    nome: "Rafael Ferreira Lucietto",
    idade: 16,
    cursando: ["TIA", "PDM"],
    presença: ["2024-02-05", "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09"],
    ra: 1763808
}
console.log(alunos3)//Mostrar registro
let alunos4 = {//Cadastro de alunos
    nome: "Leonardo Limas Rosa",
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2024-02-05"],
    ra: 4782985
}
console.log(alunos4)//Mostrar registro
let alunos5 = {//Cadastro de alunos
    nome: "Pedro Nonato da Silva",
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2024-02-05", "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09"],
    ra: 378294689
}
console.log(alunos5)//Mostrar registro
//Validação
function validarCadastro(alunos){
    if(nome.lenght < 10){
        console.log("O nome " + alunos.nome + " deve ter no mínimo 10 caracteres")//Validação do nome
        return false;
    } else if(idade < 14){
        console.log("Idade do " + alunos.nome + " inválida")//Validadação da idade
        return false;
    } else if(cursando.lenght < 3){
        console.log(alunos.nome + " deve cursar no mínimo 3 matérias")//Validação dos cursos
        return false;
    } else if(presença.lenght < 2){
        console.log("Mínimo de presenças  do " + alunos.nome + " inválido")//Validação de presenças
        return false;
    } else if(ra != 7){
        console.log("RA do " + alunos.nome + " inválido")//Validação RA
        return false;
    } else{
        console.log("CADASTRO CONCLUÍDO!!")//Se passar pelas validações, mostrar texto
        return true;
    }
}

validarCadastro(alunos)
console.log(alunos1, alunos2, alunos3, alunos4, alunos5)
