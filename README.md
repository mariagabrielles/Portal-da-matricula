!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Matrícula Escolar | Portal Educa+</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<header class="topbar">
  <div class="container nav">
    <a class="brand" href="#inicio">
      <span class="school-icon">🎓</span>
      <span>
        <strong> Portal Educa+ </strong>
        <small>Portal de Matrículas</small>
      </span>
    </a>
    <nav>
      <a href="#inicio">Início</a>
      <a href="#etapas">Etapas</a>
      <a href="#documentos">Documentos</a>
      <a href="#contato">Contato</a>
    </nav>
    <button class="outline-btn" onclick="openEnrollment()">Matricule-se</button>
  </div>
</header>

<main id="inicio">
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="label">📚 MATRÍCULAS 2026 ABERTAS</span>
        <h1>O futuro começa na escola.</h1>
        <p>Faça a matrícula do seu filho de forma simples, segura e online.</p>
        <div class="hero-actions">
          <button class="primary-btn" onclick="openEnrollment()">Iniciar matrícula</button>
          <a class="secondary-btn" href="#etapas">Saiba como funciona</a>
        </div>
        <div class="trust">
          <span>✓ Matrícula de qualidade</span>
          <span>✓ Processo online</span>
          <span>✓ Atendimento especializado</span>
        </div>
      </div>

      <div class="hero-panel">
        <div class="panel-head">
          <span>2026</span>
          <b>Vagas disponíveis</b>
        </div>
        <h2>Escolha a etapa de ensino</h2>
        <div class="grade-list">
          <button onclick="selectGrade('Educação Infantil')"><span>🧸</span><div><b>Educação Infantil</b><small>Maternal ao Pré</small></div><i>›</i></button>
          <button onclick="selectGrade('Ensino Fundamental I')"><span>✏️</span><div><b>Ensino Fundamental I</b><small>1º ao 5º ano</small></div><i>›</i></button>
          <button onclick="selectGrade('Ensino Fundamental II')"><span>📖</span><div><b>Ensino Fundamental II</b><small>6º ao 9º ano</small></div><i>›</i></button>
          <button onclick="selectGrade('Ensino Médio')"><span>🎓</span><div><b>Ensino Médio</b><small>1ª à 3ª série</small></div><i>›</i></button>
        </div>
      </div>
    </div>
  </section>

  <section class="container stats">
    <div><b>1.200+</b><span>alunos matriculados</span></div>
    <div><b>25 anos</b><span>de experiência</span></div>
    <div><b>100%</b><span>processo digital</span></div>
    <div><b>4 etapas</b><span>para concluir</span></div>
  </section>

  <section class="section" id="etapas">
    <div class="container">
      <div class="section-heading">
        <span class="eyebrow">COMO FUNCIONA</span>
        <h2>Matricule-se em poucos passos</h2>
        <p>Um processo simples para você cuidar do futuro do seu filho.</p>
      </div>
      <div class="steps">
        <article><span>01</span><div class="step-icon">📝</div><h3>Preencha o cadastro</h3><p>Informe os dados do responsável e do aluno.</p></article>
        <article><span>02</span><div class="step-icon">📚</div><h3>Escolha a turma</h3><p>Selecione a etapa de ensino e o ano escolar.</p></article>
        <article><span>03</span><div class="step-icon">📎</div><h3>Envie os documentos</h3><p>Separe os documentos necessários para a matrícula.</p></article>
        <article><span>04</span><div class="step-icon">✅</div><h3>Confirme a matrícula</h3><p>Receba a confirmação e as próximas orientações.</p></article>
      </div>
    </div>
  </section>

  <section class="documents" id="documentos">
    <div class="container document-grid">
      <div>
        <span class="eyebrow">DOCUMENTAÇÃO</span>
        <h2>Tenha os documentos em mãos</h2>
        <p>Para agilizar o processo, prepare os documentos abaixo antes de iniciar.</p>
      </div>
      <div class="document-card">
        <div>📄</div>
        <ul>
          <li>Documento do responsável</li>
          <li>Certidão de nascimento do aluno</li>
          <li>Comprovante de residência</li>
          <li>Documento escolar / histórico</li>
          <li>Carteira de vacinação, quando aplicável</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section" id="contato">
    <div class="container contact">
      <div>
        <span class="eyebrow">PRECISA DE AJUDA?</span>
        <h2>Fale com nossa secretaria</h2>
        <p>Nossa equipe está pronta para orientar você durante o processo de matrícula.</p>
      </div>
      <div class="contact-box">
        <span>📞</span><div><b>(11) 4000-2026</b><small>Seg. a Sex. · 8h às 17h</small></div>
      </div>
      <div class="contact-box">
        <span>✉️</span><div><b>secretaria@novageracao.edu.br</b><small>Respondemos em horário comercial</small></div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container footer-content">
    <div><strong>🎓 Colégio Nova Geração</strong><span>Portal de Matrículas 2026</span></div>
    <span>© 2026 · Projeto demonstrativo</span>
  </div>
</footer>

<div class="modal hidden" id="modal">
  <div class="modal-box">
    <button class="close" onclick="closeEnrollment()">×</button>
    <span class="label">MATRÍCULA ESCOLAR</span>
    <h2 id="formTitle">Inicie a matrícula</h2>
    <p>Preencha os dados abaixo para solicitar a matrícula.</p>
    <form id="enrollmentForm" onsubmit="submitEnrollment(event)">
      <label>Nome do responsável
        <input required name="responsavel" placeholder="Digite seu nome completo">
      </label>
      <label>Nome do aluno
        <input required name="aluno" placeholder="Digite o nome do aluno">
      </label>
      <label>Etapa de ensino
        <select required name="etapa" id="gradeSelect">
          <option value="">Selecione</option>
          <option>Educação Infantil</option>
          <option>Ensino Fundamental I</option>
          <option>Ensino Fundamental II</option>
          <option>Ensino Médio</option>
        </select>
      </label>
      <label>E-mail
        <input required type="email" name="email" placeholder="responsavel@email.com">
      </label>
      <label>Telefone
        <input required name="telefone" placeholder="(00) 00000-0000">
      </label>
      <button class="primary-btn full" type="submit">Enviar solicitação de matrícula</button>
    </form>
    <div id="success" class="success hidden">✅ Solicitação enviada! A secretaria entrará em contato para confirmar os próximos passos.</div>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>
<# Portal-da-matricula
Portal Educa+
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Caminho onde as matrículas serão armazenadas
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "matriculas.json");

// Cria a pasta data caso ela não exista
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Cria o arquivo de matrículas caso ele não exista
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf8");
}

// Permite receber JSON
app.use(express.json());

// Permite receber formulários
app.use(express.urlencoded({ extended: true }));

// Disponibiliza os arquivos da pasta public
app.use(express.static(path.join(__dirname, "public")));


// ==========================================
// LER AS MATRÍCULAS
// ==========================================

function lerMatriculas() {
    try {
        const arquivo = fs.readFileSync(DATA_FILE, "utf8");
        return JSON.parse(arquivo);
    } catch (erro) {
        return [];
    }
}


// ==========================================
// SALVAR AS MATRÍCULAS
// ==========================================

function salvarMatriculas(matriculas) {
    fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(matriculas, null, 2),
        "utf8"
    );
}


// ==========================================
// RECEBER UMA NOVA MATRÍCULA
// ==========================================

app.post("/api/matriculas", (req, res) => {

    const dados = req.body;

    // Verificação dos campos obrigatórios
    if (
        !dados.nome ||
        !dados.cpf ||
        !dados.nascimento ||
        !dados.responsavel ||
        !dados.telefone
    ) {
        return res.status(400).json({
            erro: "Preencha todos os campos obrigatórios."
        });
    }

    const matriculas = lerMatriculas();

    // Criar nova matrícula
    const novaMatricula = {

        id: Date.now().toString(),

        protocolo:
            "MAT-" +
            Math.floor(100000 + Math.random() * 900000),

        criadoEm: new Date().toISOString(),

        status: "Pendente",

        nome: dados.nome,

        cpf: dados.cpf,

        nascimento: dados.nascimento,

        sexo: dados.sexo || "",

        email: dados.email || "",

        telefone: dados.telefone,

        responsavel: dados.responsavel,

        parentesco: dados.parentesco || "",

        endereco: dados.endereco || "",

        cidade: dados.cidade || "",

        cep: dados.cep || "",

        serie: dados.serie || "",

        turno: dados.turno || "",

        escolaAnterior:
            dados.escolaAnterior || "",

        observacoes:
            dados.observacoes || ""
    };

    // Adiciona a matrícula
    matriculas.push(novaMatricula);

    // Salva no arquivo JSON
    salvarMatriculas(matriculas);

    // Responde para o navegador
    res.status(201).json(novaMatricula);
});


// ==========================================
// LISTAR TODAS AS MATRÍCULAS
// ==========================================

app.get("/api/matriculas", (req, res) => {

    const matriculas = lerMatriculas();

    res.json(matriculas);
});


// ==========================================
// ALTERAR STATUS
// ==========================================

app.patch("/api/matriculas/:id", (req, res) => {

    const matriculas = lerMatriculas();

    const matricula = matriculas.find(
        item => item.id === req.params.id
    );

    if (!matricula) {
        return res.status(404).json({
            erro: "Matrícula não encontrada."
        });
    }

    const statusPermitidos = [
        "Pendente",
        "Aprovada",
        "Recusada"
    ];

    if (
        req.body.status &&
        statusPermitidos.includes(req.body.status)
    ) {
        matricula.status = req.body.status;
    }

    salvarMatriculas(matriculas);

    res.json(matricula);
});


// ==========================================
// EXCLUIR MATRÍCULA
// ==========================================

app.delete("/api/matriculas/:id", (req, res) => {

    const matriculas = lerMatriculas();

    const novasMatriculas = matriculas.filter(
        item => item.id !== req.params.id
    );

    if (novasMatriculas.length === matriculas.length) {
        return res.status(404).json({
            erro: "Matrícula não encontrada."
        });
    }

    salvarMatriculas(novasMatriculas);

    res.json({
        sucesso: true
    });
});


// ==========================================
// INICIAR SERVIDOR
// ==========================================

app.listen(PORT, () => {

    console.log(
        `Sistema funcionando em http://localhost:${PORT}`
    );

});
*{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#17365d;--blue:#2767a8;--light:#eef5fb;--text:#182536;--muted:#667487;--border:#dfe6ee;--green:#1d8b5a}
body{font-family:Arial,Helvetica,sans-serif;color:var(--text);background:#f8fafc;line-height:1.5}
.container{width:min(1120px,calc(100% - 36px));margin:auto}
.topbar{background:#fff;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:10}
.nav{height:78px;display:flex;align-items:center;gap:32px}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--text);margin-right:auto}
.school-icon{display:grid;place-items:center;width:42px;height:42px;border-radius:10px;background:var(--navy);font-size:21px}
.brand strong{display:block;font-size:16px}.brand small{display:block;color:#788596;font-size:11px}
nav{display:flex;gap:25px}nav a{color:#59697c;text-decoration:none;font-size:13px;font-weight:600}
.outline-btn{border:1px solid #b8c9db;background:white;color:var(--navy);border-radius:7px;padding:10px 17px;font-weight:800;cursor:pointer}
.hero{background:linear-gradient(115deg,#eaf3fb,#fff);padding:65px 0 55px}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:center}
.label{display:inline-block;background:#e0edf8;color:#225b92;border-radius:5px;padding:6px 10px;font-size:10px;font-weight:900;letter-spacing:.8px;margin-bottom:15px}
.hero h1{font-size:55px;line-height:1.04;letter-spacing:-1.8px;max-width:650px}
.hero-copy>p{font-size:18px;color:var(--muted);max-width:600px;margin:18px 0 27px}
.hero-actions{display:flex;gap:10px}
.primary-btn,.secondary-btn{display:inline-block;border-radius:7px;padding:12px 18px;font-size:13px;font-weight:800;text-decoration:none;cursor:pointer}
.primary-btn{border:0;background:var(--navy);color:#fff}.secondary-btn{background:#fff;color:var(--navy);border:1px solid #cbd8e5}
.trust{display:flex;flex-wrap:wrap;gap:17px;margin-top:23px;color:#5f7082;font-size:11px;font-weight:700}
.hero-panel{background:#fff;border:1px solid var(--border);border-radius:13px;padding:24px;box-shadow:0 18px 45px #17365d12}
.panel-head{display:flex;justify-content:space-between;color:#748294;font-size:11px}.panel-head b{color:var(--green)}
.hero-panel h2{font-size:22px;margin:20px 0 15px}
.grade-list{display:grid;gap:8px}.grade-list button{display:flex;align-items:center;gap:12px;width:100%;border:1px solid #e1e7ee;background:#fff;border-radius:8px;padding:12px;text-align:left;cursor:pointer}.grade-list button:hover{border-color:#aac3dc;background:#f7fbff}.grade-list button>span{font-size:22px}.grade-list div{flex:1}.grade-list b{display:block;font-size:13px}.grade-list small{color:#7a8795;font-size:10px}.grade-list i{font-size:22px;color:#8090a2;font-style:normal}
.stats{display:grid;grid-template-columns:repeat(4,1fr);background:#fff;border:1px solid var(--border);border-radius:11px;margin-top:-22px;position:relative;box-shadow:0 8px 25px #1a2b4009}.stats div{padding:19px;border-right:1px solid var(--border);text-align:center}.stats div:last-child{border-right:0}.stats b{display:block;color:var(--navy);font-size:20px}.stats span{font-size:10px;color:#718094}
.section{padding:70px 0}.section-heading{text-align:center;margin-bottom:34px}.eyebrow{display:block;color:#2767a8;font-size:10px;font-weight:900;letter-spacing:1.4px}.section-heading h2,.document-grid h2,.contact h2{font-size:30px;margin:5px 0}.section-heading p,.document-grid p,.contact p{color:var(--muted);font-size:14px}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}.steps article{background:#fff;border:1px solid var(--border);border-radius:11px;padding:22px;position:relative}.steps article>span{position:absolute;right:16px;top:15px;color:#b4c1cf;font-size:11px;font-weight:900}.step-icon{font-size:29px;margin:12px 0}.steps h3{font-size:16px;margin-bottom:6px}.steps p{color:var(--muted);font-size:12px}
.documents{background:#eef5fb;padding:60px 0}.document-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.document-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:23px;display:flex;gap:17px}.document-card>div{font-size:31px}.document-card ul{list-style:none;display:grid;gap:8px}.document-card li{font-size:12px;color:#58687b}.document-card li::before{content:"✓";color:var(--green);font-weight:900;margin-right:8px}
.contact{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:18px;align-items:center}.contact-box{background:#fff;border:1px solid var(--border);border-radius:10px;padding:17px;display:flex;gap:12px;align-items:center}.contact-box>span{font-size:25px}.contact-box b{display:block;font-size:12px}.contact-box small{display:block;color:#758294;font-size:10px;margin-top:3px}
footer{background:#142235;color:#dce4ee;padding:25px 0}.footer-content{display:flex;justify-content:space-between;align-items:center}.footer-content div span{display:block;color:#9caabd;font-size:10px;margin-top:3px}.footer-content>span{color:#9caabd;font-size:10px}
.modal{position:fixed;inset:0;background:#0e1c2ecc;display:grid;place-items:center;padding:20px;z-index:20}.hidden{display:none!important}.modal-box{background:#fff;border-radius:13px;padding:28px;width:min(470px,100%);position:relative;max-height:90vh;overflow:auto}.close{position:absolute;right:13px;top:8px;border:0;background:none;font-size:28px;color:#718094;cursor:pointer}.modal-box h2{font-size:25px}.modal-box>p{font-size:12px;color:var(--muted);margin:5px 0 17px}.modal-box form{display:grid;gap:11px}.modal-box label{font-size:11px;font-weight:800}.modal-box input,.modal-box select{display:block;width:100%;margin-top:4px;border:1px solid #d7e0e8;border-radius:7px;padding:10px;outline:0;font-size:12px;background:#fff}.full{width:100%;margin-top:7px}.success{background:#eaf8f1;color:#176e49;border-radius:8px;padding:13px;font-size:12px;font-weight:700;margin-top:15px}
@media(max-width:900px){nav{display:none}.hero-grid{grid-template-columns:1fr}.hero h1{font-size:44px}.steps{grid-template-columns:repeat(2,1fr)}.contact{grid-template-columns:1fr 1fr}.contact>div:first-child{grid-column:1/-1}}
@media(max-width:600px){.nav{height:68px}.outline-btn{display:none}.hero{padding:45px 0}.hero h1{font-size:37px}.hero-actions{flex-direction:column}.primary-btn,.secondary-btn{text-align:center}.stats{grid-template-columns:repeat(2,1fr)}.stats div:nth-child(2){border-right:0}.stats div:nth-child(-n+2){border-bottom:1px solid var(--border)}.steps,.document-grid,.contact{grid-template-columns:1fr}.contact>div:first-child{grid-column:auto}.section{padding:52px 0}.footer-content{display:grid;gap:12px}}

