import Conteudo, {
  Video,
  Questionario,
  Arquivo,
  Modulo,
  Aluno,
  CursoPago
} from "./Conteudo.js";


const meuConteudo = new Conteudo();

const v1 = new Video("Aula 1", 10, true, "1080p", "link.com");
const q1 = new Questionario("Quiz 1", 5, true, ["Pergunta 1"], 7);
const a1 = new Arquivo("PDF Aula", 2, true, "pdf", 1.5);

const modulo1 = new Modulo("Módulo 1", [v1, q1, a1]);

const aluno1 = new Aluno("João");
const curso = new CursoPago("Curso JS", [modulo1], [aluno1], 99.9, true);

aluno1.concluirConteudo(v1);
aluno1.concluirConteudo(q1);
aluno1.concluirConteudo(a1);

console.log("Progresso:", curso.progresso(aluno1) + "%");

curso.emitirCertificado(aluno1);