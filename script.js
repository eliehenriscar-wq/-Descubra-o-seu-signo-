const form = document.getElementById('form-signo');
const telaFormulario = document.getElementById('tela-formulario');
const telaResultado = document.getElementById('tela-resultado');
const loading = document.getElementById('loading');
const btnVoltar = document.getElementById('btn-voltar');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dataNascimento = document.getElementById('data_nascimento').value;

    if (!dataNascimento) {
        alert('Por favor, informe sua data de nascimento.');
        return;
    }

    // Mostra loading e esconde formulário
    telaFormulario.classList.add('d-none');
    loading.classList.remove('d-none');

    try {
        const response = await fetch('/api/signo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data_nascimento: dataNascimento })
        });

        const dados = await response.json();

        if (!response.ok) {
            throw new Error(dados.erro || 'Erro ao buscar o signo');
        }

        // Preenche os dados na tela de resultado
        document.getElementById('emoji-signo').textContent = dados.emoji;
        document.getElementById('nome-signo').textContent = dados.nome;
        document.getElementById('data-formatada').textContent = dados.data_formatada;
        document.getElementById('periodo-signo').textContent = dados.periodo;
        document.getElementById('elemento-signo').textContent = dados.elemento;
        document.getElementById('planeta-signo').textContent = dados.planeta;
        document.getElementById('caracteristicas-signo').textContent = dados.caracteristicas;
        document.getElementById('descricao-signo').textContent = dados.descricao;

        // Mostra resultado
        loading.classList.add('d-none');
        telaResultado.classList.remove('d-none');

    } catch (erro) {
        loading.classList.add('d-none');
        telaFormulario.classList.remove('d-none');
        alert('Erro: ' + erro.message);
    }
});

// Botão voltar
btnVoltar.addEventListener('click', () => {
    telaResultado.classList.add('d-none');
    telaFormulario.classList.remove('d-none');
    form.reset();
});
