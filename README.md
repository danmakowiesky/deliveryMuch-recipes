# Delivery Much Challange

Trata-se de um desafio onde a ideia é consumir duas APIs públicas, RecipePuppy e Giphy.
Como resultado, deveria ser mostrado o titulo da receita, lista dos ingredientes, link pra acessar a receita e o link de um gif para a receita.

# Framework
[Express](https://expressjs.com/pt-br/),
Decidi utilizar o express como framework para construir a API, pois a mesma tem uma finalidade bem simples e se encaixa muito bem com os recursos oferecidos pelo framework.

# Criação do ambiente

Uma das premissas do desafio seria a de criar um ambiente com docker. A baixo segue os comandos que devem ser executados.
```
sudo docker build -t danielmakowiesky-challenge .

sudo docker run -it -p 3333:3333 danielmakowiesky-challenge

```

# Exemplo de como utilizar a API:

Nesta api existe apenas um endpoint o __/recipes/__

Pode ser passado via queryparam pelo menos um ingrediente e no máximo três.


```http://localhost:3333/recipes/?i=egg,bacon,avocado ```

```
{
  "keywords": [
    "egg",
    "avocado"
  ],
  "recipes": [
    {
      "title": "Mex Ranchero Eggs Recipe",
      "href": "http://www.grouprecipes.com/38506/mex-ranchero-eggs.html",
      "igredients": [
        " black pepper",
        " chicken",
        " cilantro",
        " corn tortillas",
        " egg",
        " green onion",
        " jalapeno",
        " onions",
        " sour cream",
        " tomato",
        " vegetable oil",
        "avocado"
      ],
      "gif": "https://giphy.com/gifs/shrek-rLV7YHJ2LNX8Y"
    },
    {
      "title": "Chili Dutch Baby",
      "href": "http://www.cooks.com/rec/view/0,1718,150177-230192,00.html",
      "igredients": [
        " avocado",
        " beans",
        " cornmeal",
        " egg",
        " flour",
        " green chilies",
        " green onion",
        " milk",
        " monterey jack cheese",
        " salsa verde",
        "butter"
      ],
      "gif": "https://giphy.com/gifs/shrek-rLV7YHJ2LNX8Y"
    },
  ]
}
```

Caso queira executar a API sem ser via docker, basta executar os comandos:

```
yarn
yarn start
```

# Testes

Os testes se encontram no diretorio ```__testes__``` na raiz do projeto. Para executalos, basta executar o comando:

```
yarn test
```

