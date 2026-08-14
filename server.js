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