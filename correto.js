let alunoCorreto = {
        nome: "Pedro Hayashida",
        idade: 18,
        cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
        presença: ["2024-02-05", "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09"],
        ra: 1478523
}
console.log(alunoCorreto)
function validarCadastro(alunoCorreto){
    if(nome.lenght < 10){
        console.log("Nome deve ter no mínimo 10 caracteres")
        return false;
    } else if(idade < 14){
        console.log("Idade inválida")
        return false;
    } else if(cursando.lenght < 3){
        console.log("Deve cursar no mínimo 3 matérias")
        return false;
    } else if(presença.lenght < 2){
        console.log("Mínimo de presenças inválido")
        return false;
    } else if(ra != 7){
        console.log("RA inválido")
        return false;
    } else{
        console.log("CADASTRO CONCLUÍDO!!")
        return true;
    }

    validarCadastro(alunoCorreto)
    
}
