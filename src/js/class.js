export default class Aluno {

    nome;

    matricula;

    nota1;

    nota2;

    nota3;

    constructor(nome, matricula, n1, n2, n3) {

        this.nome = nome;

        this.matricula = matricula;

        this.nota1 = n1;

        this.nota2 = n2;

        this.nota3 = n3;

    }

    getNome() {
        return this.nome;
    }

    setNomr(nome) {
        this.nome = nome;
    }

    getMatricula() {
        return this.matricula;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
    }

    getNota1() {
        return this.nota1;
    }

    setNota1(nota1) {
        this.nota1 = nota1;
    }

    getNota2() {
        return this.nota2;
    }

    setNota2(nota2) {
        this.nota2 = nota2;
    }

    getNota3() {
        return this.nota3;
    }

    setNota(nota3) {
        this.nota3 = nota3
    }


    calculaMedia() {

        return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);

    }

}