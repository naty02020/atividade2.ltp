export default class Conteudo {
  constructor(titulo, duracao, disponivel) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.disponivel = disponivel;
  }
}
export class Video extends Conteudo {
  constructor(titulo, duracao, disponivel, resolucao, url) {
    super(titulo, duracao, disponivel);
    this.resolucao = resolucao;
    this.url = url;
  }
}

export class Questionario extends Conteudo {
  constructor(titulo, duracao, disponivel, perguntas, notaMinima) {
    super(titulo, duracao, disponivel);
    this.perguntas = perguntas;
    this.notaMinima = notaMinima;
  }
}

export class Arquivo extends Conteudo {
  constructor(titulo, duracao, disponivel, formato, tamanhoMB) {
    super(titulo, duracao, disponivel);
    this.formato = formato;
    this.tamanhoMB = tamanhoMB;
  }
}
export class Modulo {
  constructor(nome, conteudos = []) {
    this.nome = nome;
    this.conteudos = conteudos;
  }
}

export class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.progressoConteudos = new Map();
  }

  concluirConteudo(conteudo) {
    this.progressoConteudos.set(conteudo, true);
  }
}

export class Curso {
  constructor(nome, modulos = [], alunos = []) {
    this.nome = nome;
    this.modulos = modulos;
    this.alunos = alunos;
  }

  progresso(aluno) {
    let total = 0;
    let concluidos = 0;

    this.modulos.forEach(modulo => {
      modulo.conteudos.forEach(conteudo => {
        total++;
        if (aluno.progressoConteudos.get(conteudo)) {
          concluidos++;
        }
      });
    });

    if (total === 0) return 0;
    return (concluidos * 100) / total;
  }

  emitirCertificado(aluno) {
    console.log("Curso base não emite certificado.");
  }
}

export class CursoGratuito extends Curso {
  constructor(nome, modulos, alunos) {
    super(nome, modulos, alunos);
  }
}

export class CursoPago extends Curso {
  constructor(nome, modulos, alunos, preco, certificado) {
    super(nome, modulos, alunos);
    this.preco = preco;
    this.certificado = certificado;
  }

  emitirCertificado(aluno) {
    const progresso = this.progresso(aluno);

    if (this.certificado && progresso === 100) {
      console.log(`Certificado emitido para ${aluno.nome}`);
    } else {
      console.log("Aluno não concluiu o curso ou certificado indisponível.");
    }
  }
}