// Done 12 siy yo
const signos = {
    "Áries": {
        emoji: "♈",
        periodo: "21 de março a 19 de abril",
        elemento: "Fogo",
        planeta: "Marte",
        caracteristicas: "Corajoso, impulsivo, líder nato, energético e independente.",
        descricao: "Áries é o primeiro signo do zodíaco. Pessoas de Áries são dinâmicas, gostam de desafios e têm muita iniciativa. Podem ser impacientes, mas possuem uma energia contagiante."
    },
    "Touro": {
        emoji: "♉",
        periodo: "20 de abril a 20 de maio",
        elemento: "Terra",
        planeta: "Vênus",
        caracteristicas: "Paciente, teimoso, sensual, confiável e apreciador do conforto.",
        descricao: "Touro valoriza a estabilidade, o prazer e a segurança material. São pessoas práticas, leais e que gostam de rotina."
    },
    "Gêmeos": {
        emoji: "♊",
        periodo: "21 de maio a 20 de junho",
        elemento: "Ar",
        planeta: "Mercúrio",
        caracteristicas: "Comunicativo, versátil, curioso, inteligente e adaptável.",
        descricao: "Gêmeos é o signo da comunicação e da curiosidade. Pessoas geminianas são ágeis mentalmente e gostam de aprender coisas novas."
    },
    "Câncer": {
        emoji: "♋",
        periodo: "21 de junho a 22 de julho",
        elemento: "Água",
        planeta: "Lua",
        caracteristicas: "Emotivo, intuitivo, protetor, ligado à família e sensível.",
        descricao: "Câncer é profundamente ligado às emoções e ao lar. São pessoas carinhosas, protetoras e intuitivas."
    },
    "Leão": {
        emoji: "♌",
        periodo: "23 de julho a 22 de agosto",
        elemento: "Fogo",
        planeta: "Sol",
        caracteristicas: "Confiante, generoso, criativo, carismático e líder natural.",
        descricao: "Leão brilha como o Sol. Pessoas de Leão são confiantes, generosas e adoram ser o centro das atenções."
    },
    "Virgem": {
        emoji: "♍",
        periodo: "23 de agosto a 22 de setembro",
        elemento: "Terra",
        planeta: "Mercúrio",
        caracteristicas: "Analítico, organizado, perfeccionista, prestativo e prático.",
        descricao: "Virgem busca a perfeição e a ordem. São pessoas detalhistas, inteligentes e que gostam de ajudar os outros."
    },
    "Libra": {
        emoji: "♎",
        periodo: "23 de setembro a 22 de outubro",
        elemento: "Ar",
        planeta: "Vênus",
        caracteristicas: "Diplomático, justo, elegante, sociável e amante da harmonia.",
        descricao: "Libra busca equilíbrio e harmonia. São pessoas charmosas, justas e que evitam conflitos."
    },
    "Escorpião": {
        emoji: "♏",
        periodo: "23 de outubro a 21 de novembro",
        elemento: "Água",
        planeta: "Plutão / Marte",
        caracteristicas: "Intenso, apaixonado, misterioso, leal e determinado.",
        descricao: "Escorpião é intenso e profundo. Pessoas desse signo são apaixonadas, leais e têm grande força de vontade."
    },
    "Sagitário": {
        emoji: "♐",
        periodo: "22 de novembro a 21 de dezembro",
        elemento: "Fogo",
        planeta: "Júpiter",
        caracteristicas: "Aventureiro, otimista, filosófico, independente e sincero.",
        descricao: "Sagitário ama a liberdade e a aventura. São otimistas, honestos e sempre em busca de novos horizontes."
    },
    "Capricórnio": {
        emoji: "♑",
        periodo: "22 de dezembro a 19 de janeiro",
        elemento: "Terra",
        planeta: "Saturno",
        caracteristicas: "Ambicioso, disciplinado, responsável, paciente e determinado.",
        descricao: "Capricórnio é o signo da ambição. Pessoas capricornianas são trabalhadoras, responsáveis e focadas em objetivos."
    },
    "Aquário": {
        emoji: "♒",
        periodo: "20 de janeiro a 18 de fevereiro",
        elemento: "Ar",
        planeta: "Urano / Saturno",
        caracteristicas: "Independente, inovador, humanitário, original e visionário.",
        descricao: "Aquário é o signo da inovação. São pessoas originais, inteligentes e que pensam no coletivo."
    },
    "Peixes": {
        emoji: "♓",
        periodo: "19 de fevereiro a 20 de março",
        elemento: "Água",
        planeta: "Netuno / Júpiter",
        caracteristicas: "Sonhador, empático, intuitivo, artístico e compassivo.",
        descricao: "Peixes é o signo mais sensível. Pessoas de Peixes são empáticas, criativas e conectadas com o mundo emocional."
    }
};

// Fonksyon pou jwenn siy la
function descobrirSigno(dia, mes) {
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) return "Áries";
    if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) return "Touro";
    if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) return "Gêmeos";
    if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) return "Câncer";
    if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) return "Leão";
    if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) return "Virgem";
    if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) return "Libra";
    if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) return "Escorpião";
    if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) return "Sagitário";
    if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) return "Capricórnio";
    if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) return "Aquário";
    if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) return "Peixes";
    return null;
}

// Fòma dat
function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

// Eleman yo
const form = document.getElementById('form-signo');
const telaFormulario = document.getElementById('tela-formulario');
const telaResultado = document.getElementById('tela-resultado');
const loading = document.getElementById('loading');
const btnVoltar = document.getElementById('btn-voltar');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dataNascimento = document.getElementById('data_nascimento').value;

    if (!dataNascimento) {
        alert('Por favor, informe sua data de nascimento.');
        return;
    }

    // Mostra loading
    telaFormulario.classList.add('d-none');
    loading.classList.remove('d-none');

    // Ti delay pou efè loading
    setTimeout(() => {
        const [ano, mes, dia] = dataNascimento.split("-").map(Number);
        const nomeSigno = descobrirSigno(dia, mes);

        if (!nomeSigno) {
            loading.classList.add('d-none');
            telaFormulario.classList.remove('d-none');
            alert('Data inválida.');
            return;
        }

        const dados = signos[nomeSigno];

        // Ranpli rezilta yo
        document.getElementById('emoji-signo').textContent = dados.emoji;
        document.getElementById('nome-signo').textContent = nomeSigno;
        document.getElementById('data-formatada').textContent = formatarData(dataNascimento);
        document.getElementById('periodo-signo').textContent = dados.periodo;
        document.getElementById('elemento-signo').textContent = dados.elemento;
        document.getElementById('planeta-signo').textContent = dados.planeta;
        document.getElementById('caracteristicas-signo').textContent = dados.caracteristicas;
        document.getElementById('descricao-signo').textContent = dados.descricao;

        // Mostra rezilta
        loading.classList.add('d-none');
        telaResultado.classList.remove('d-none');
    }, 800);
});

// Bouton tounen
btnVoltar.addEventListener('click', () => {
    telaResultado.classList.add('d-none');
    telaFormulario.classList.remove('d-none');
    form.reset();
});
