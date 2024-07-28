       // teste
       
        const contentArray = [
          
           "I - Introdução. (Balão Verde)",
    "Seja bem-vindo(a) ao Treinamento Complementar I do Exército Brasileiro.",
    "Eu sou o Segundo Tenente Therus e irei treiná-lo(a).",
    "Não durma durante o treinamento para não ser auto-kickado(a).",
    "Responda às perguntas com \"Sim, Senhor\", e \"Não, Senhor\".",
    "Se aprovado(a), ao final do treinamento receberá a sigla Tc1.",
    "Se reprovado(a), terá a chance de refazer o treinamento em outro momento.",
    "O treinamento está dividido em cinco partes: Introdução, Site, Posto de Verificação (PDV), TeamSpeak3 (TS3) e Recrutamento Externo (RE).",
    "Dúvidas?",
    "II - Site. (Balão Verde)",
    "Acesse: exbrhabbo,com (troque a , por .)",
    "O site do Exército é de extrema importância para a instituição.",
    "Nele, encontramos diversas informações e todos os nossos registros.",
    "Há uma apostila de peles/cabelos permitidos essencial para todos, por exemplo.",
    "Mas a principal funcionalidade do site é a Pesquisa Militar.",
    "A pesquisa militar é uma caixa de pesquisa presente ao lado esquerdo da página inicial.",
    "Lá podemos inserir o nickname de qualquer avatar do Habbo e o sistema irá passar o status dele relacionado ao nosso Exército.",
    "Os status são:",
    "Registro Inexistente - Nunca se alistou no Exército Brasileiro.",
    "Ativo - Devidamente alistado no Exército Brasileiro.",
    "Já no caso dos demitidos temos:",
    "Auto-demissão, Mau Comportamento, Traição ou Sem Volta.",
    "Em caso de \"Mau Comportamento\" ou \"Traição\", sussurre com um Oficial e pergunte se pode alistá-lo.",
    "Nos casos de \"Sem Volta\", a pessoa não poderá se alistar de qualquer maneira.",
    "Dúvidas?",
    "III. Posto de Verificação (PDV). (Balão Verde)",
    "O Posto de Verificação é responsável por verificar possíveis irregularidades em fardamento, missão, grupo e registro de todos os praças.",
    "Ele fica localizado ao lado das esteiras, para assumir fique na portinha e aguarde um Oficial.",
    "Após isso, mude a cor do seu balão de fala para \"VERDE\".",
    "Caso todos GP’s estiverem preenchidos, você deverá assumir um superior em PDV.",
    "Exemplo: \"Assumo, [Patente]\".",
    "Caso queira sair ou se ausentar, peça substituição do posto. A saída é através do tapete preto.",
    "Exemplo: \"Substituição, PDV\"",
    "Existem quatro comandos no PDV, que são ativados somente na cadeira, que são:",
    ":liberar, :pular, :ausente e :vestir.",
    "O comando \":liberar\" é utilizado se o militar for alistado e estiver com os requisitos corretos: missão, farda, perfil habilitado, status online ativo e grupo aberto favoritado.",
    "O comando \":pular\" transfere para o último lugar da fila.",
    "O comando \":ausente\" envia a pessoa de volta para o hall de visitantes.",
    "O comando \":vestir\" veste o fardamento correto na pessoa.",
    "Em caso de dúvidas, fale com o Oficial que estiver no Monitoramento do Quartel General (MQG).",
    "Regras do Posto de Verificação:",
    "1 - Não libere a entrada sem conferir tudo, inclusive o registro no site.",
    "2 - Não saia do PDV sem antes pedir a Substituição.",
    "3 - Não fique ausente no PDV.",
    "4 - Sempre utilize o balão de fala VERDE.",
    "Dúvidas?",
    "IV - Team Speak 3 (TS3). (Balão Verde)",
    "O Team Speak 3 é uma ferramenta de comunicação utilizada pelos membros do Exército para que se tenha uma maior eficiência e precisão na comunicação.",
    "Quando assumir a patente de Cabo, é fundamental possuir o Team Speak 3 para um bom desenvolvimento e facilidade nas demais funções que você receberá.",
    "Como baixar o TeamSpeak3? É bem simples, o aplicativo existe para celular e PC.",
    "O aplicativo é bem leve, o que facilita o download para qualquer um.",
    "Para ter auxílio na configuração e instalação, basta procurar um Ajudante.",
    "Estes utilizam uma medalha azul no fardamento.",
    "Caso não encontre nenhum no momento em que precisar, peça ajuda a um Oficial.",
    "Dúvidas?",
    "V - Recrutamento Externo (RE). (Balão Verde)",
    "O Recrutamento Externo (RE) consiste em sair com sua conta pelo hotel e trazer uma pessoa por vez ao Quartel General.",
    "O RE é feito através do TeamSpeak, por onde os Oficiais monitoram esta função.",
    "Caso não tenha o aplicativo, procure um Ajudante - os mesmos usam uma medalha na cor azul, conforme já comentado no tópico anterior.",
    "Você deve camuflar sua conta: limpe sua missão e vista uma roupa normal.",
    "Vá até os quartos mais lotados e converse com os usuários, convidando-os para efetuar seu alistamento no Exército Brasileiro.",
    "É necessário fazer com que pelo menos 1 pessoa se aliste no Quartel General.",
    "Dúvidas?",
    "VI - Finalização. (Balão verde)",
    "Parabéns, está aprovado(a) no Treinamento Complementar I.",
    "Agora você pode realizar o Recrutamento Externo.",
    "Altere sua sua missão para: [Ex.BR] Cabo <Tc1 ",
];

        const container = document.getElementById('container');
        const alertBox = document.getElementById('alert');
        const copyPreviousButton = document.getElementById('copyPrevious');
        const copyNextButton = document.getElementById('copyNext');
        const startAutoCopyButton = document.getElementById('startAutoCopy');
        const stopAutoCopyButton = document.getElementById('stopAutoCopy');

        let autoCopyInterval;

        contentArray.forEach((paragraph, index) => {
          const p = document.createElement('p');
          p.className = 'paragraph';
          if (paragraph.includes('(Balão Verde)')) {
            p.classList.add('balao-verde');
          }
          p.dataset.index = index;
          p.innerText = paragraph;
          container.appendChild(p);
        });

        const paragraphs = document.querySelectorAll('.paragraph');

        function copyText(index) {
          if (index < 0 || index >= paragraphs.length) return;

          const textToCopy = paragraphs[index].innerText;
          navigator.clipboard.writeText(textToCopy).then(() => {
            paragraphs.forEach(p => p.classList.remove('copied'));
            paragraphs[index].classList.add('copied');

            // Scroll to center the paragraph
            const containerHeight = container.clientHeight;
            const paragraphOffsetTop = paragraphs[index].offsetTop;
            const paragraphHeight = paragraphs[index].offsetHeight;
            const scrollTop = paragraphOffsetTop - (containerHeight / 2) + (paragraphHeight / 2);
            container.scrollTo({ top: scrollTop, behavior: 'smooth' });

            // Show alert if paragraph contains "(Balão Verde)"
            if (paragraphs[index].classList.contains('balao-verde')) {
              showAlert();
              clearInterval(autoCopyInterval); // Stop the timer if "(Balão Verde)" is found
            }
          }).catch(err => console.error('Failed to copy text: ', err));
        }

        function showAlert() {
          alertBox.style.display = 'block';
          setTimeout(() => {
            alertBox.style.display = 'none';
            enableButtons();
          }, 3000);
        }

        function enableButtons() {
          copyPreviousButton.disabled = false;
          copyNextButton.disabled = false;
        }

        let currentIndex = 0;

        copyPreviousButton.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            copyText(currentIndex);
          }
        });

        copyNextButton.addEventListener('click', () => {
          if (currentIndex < paragraphs.length - 1) {
            currentIndex++;
            copyText(currentIndex);
          }
        });

        startAutoCopyButton.addEventListener('click', () => {
          autoCopyInterval = setInterval(() => {
            if (currentIndex < paragraphs.length - 1) {
              currentIndex++;
              copyText(currentIndex);
            } else {
              clearInterval(autoCopyInterval);
            }
          }, 4000);
        });

        stopAutoCopyButton.addEventListener('click', () => {
          clearInterval(autoCopyInterval);
        });

        // Copia automaticamente o primeiro parágrafo ao carregar a página
        window.onload = () => {
          copyText(currentIndex);
        };