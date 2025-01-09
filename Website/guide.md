# Aqui irei te dar o meu próprio passo a passo de como criar um site básico com html, css e javascript:

## Para começar, vamos criar um diretório raiz para o seu projeto. Vamos chamar ele de 'meu-site'.

Dentro deste diretório criaremos pastas para organizar as coisas, afinal seria difícil depois que nosso projeto se tornar algo maior de se mexer nas coisas.

- static: onde ficarão arquivos .css, .js e + outros tipos de arquivos estaticos caso você queira ir além.

- se quiser também pode criar uma pasta para o nav e o footer, mas no meu site eu tive problemas para fazer algumas coisas funcionarem então não vamos fazer isto aqui.

Dentro de 'meu-site' crie um arquivo chamado index.html. Nele estará a estrutura da página principal (a que aparece logo quando abrimos o site).

Dentro do index, use o atalho para montar a estrutura do html5 "!" e aperte enter. Se estiver tudo certo aparecerá uma estrutura html de 11 linhas, onde na primeira tem um código DOCTYPE html (indicando que é um html5).

## Criando seu website

**Antes de mais nada, já adiante a importação dos seus arquivos estáticos, style.css e index.js. Use o site exemplo para saber como fazê-lo 
(_abra o [index.html](https://github.com/iamshiuba/guide_html_css_js_py/blob/main/Website/index.html) para entender_)!**

Agora que já fez isso, se não tiver já algo em mente, comece criando um título usando a tag `h1`. Depois adicione um parágrafo utilizando a tag `p` logo 
abaixo do seu título. Títulos e parágrafos são bem comuns em um website, então aprender a utilizá-los é uma boa prática. Exemplo:

`<h1>Olá, mundo!</h1>`

`<p>Esse é meu primeiro website usando HTML, CSS e JS!</p>`

(as tags se abrem com <> e fecham com </> (exceto algumas tags como `<br />`). Se a tag for h1, abra e feche com h1 dentro! O texto fica entre a 
abertura e 
o fechamento sempre! `<h1>Olá, mundo!</h1>`)


Após adicionar esses dois elementos, já temos algo para estilizar. Abra seu arquivo css e chame cada tag para estilizá-los como preferir! 
Experimente deixando o título com uma cor branca usando:

h1 {
    color: #FFF;
}

Depois o parágrafo numa cor diferente, eu gosto de vermelho, então seria algo como:

p {
    color: red;
}

Como pode ver, eu simplesmente chamei o nome da cor. Algumas cores podem ser simplesmente chamadas pelo nome, mas é mais aconselhável você mesmo 
defini-las para não haver confusão!

Eu acabei esquecendo de mexer no body que é o corpo do seu site. **Então antes do h1, crie uma linha para estilizar o body antes desses dois elementos 
acima:**

body { }

h1 {
    color: white;
}

p {
    color: red;
}

nele, bote a cor preta:

body {
    background-color: black;
}

Agora seu site tem um fundo preto, um título branco e um parágrafo vermelho (ou na cor que escolheu).
# **...**