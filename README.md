# Summize, uma aplicação de Resumo de Artigos com ChatGPT-4 

- Deploy: https://ia-summarizer.onrender.com

Esta é uma aplicação que utiliza a API pública Rapid-API para resumir artigos. Ela permite que os usuários insiram URLs de artigos e obtenham um resumo condensado dos mesmos. 
## Funcionalidades

- Resumo de Artigos: A aplicação permite que os usuários insiram URLs de artigos e recebam resumos concisos desses artigos.
- Interface Responsiva: A interface da aplicação é responsiva e foi criada usando o Vite e o Tailwind CSS, incluindo um design atraente com elementos de glass morphism.
- Requisições Avançadas à API: A aplicação utiliza o RTK Query para realizar requisições avançadas à API Rapid-API, que são disparadas sob determinadas condições.
- Histórico de Salvamento: A aplicação utiliza o armazenamento local (local storage) para salvar o histórico de artigos resumidos, permitindo que os usuários acessem facilmente os resumos anteriores.
- Manipulação de Eventos de Formulário: A aplicação lida com eventos de formulário para capturar as URLs dos artigos inseridos pelos usuários e processá-las.
- Implementação de Copiar para Área de Transferência: A aplicação permite que os usuários copiem os resumos gerados para a área de transferência, facilitando o compartilhamento.
- Código Limpo: Durante o desenvolvimento, foi enfatizada a prática de escrever código limpo e organizado, seguindo as melhores práticas de desenvolvimento.
  
## Tecnologias utilizadas

- ReactJS
- Redux ToolKit
- RapidAPI
- Tailwind CSS
- Netilify
## Instruções de Instalação e Uso

1. **Instalação:** Para iniciar o projeto, siga os passos abaixo:

   ```bash
   git clone https://github.com/Carlos3274/ai_summarizer.git
   cd ai_summarizer
   npm install
   ```

2. **Configuração da Chave da API:** Você precisará obter uma chave de API da Rapid-API para usar o serviço de resumo de artigos. Insira sua chave no arquivo de configuração adequado (exemplo: `.env`) como `REACT_APP_API_KEY=SUACHAVEAPI`.

3. **Execução:** Para executar o aplicativo localmente, utilize o seguinte comando:

   ```bash
   npm run dev
   ```

4. **Acesso à Aplicação:** Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, sinta-se à vontade para criar um fork e enviar um pull request. Certifique-se de seguir as diretrizes de contribuição.



