<p align="center">
  <img src="https://user-images.githubusercontent.com/14295479/72667072-b20a9f00-39f6-11ea-96ca-d6ad12b40d68.png"/>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/@devesharp/helpers-js" target="_blank"><img src="https://img.shields.io/npm/v/@devesharp/helpers-js.svg" alt="NPM Version" /></a>
</p>

## Description

Biblioteca de componentes react desenvolvimento pela Devesharp.

## Installation

```shell
$ npm i @devesharp/react
$ yarn add @devesharp/react
```

## Documentação

#### `Header`

**Props**

```jsx
// Logo
logo: string,
// Informações do usuário
user: {
    name: string;
    image?: string;
},
// Menu do usuário
menuUserBar?: {
    title: string | JSX.Element; // Titulo
    route: string; // Routas que deve possuir
}[],
// Menu
menu: {
    title: string | JSX.Element;
    route: string;
    opened?: boolean; // Only test: Ativar menu
    subMenu?: {
        title: string | JSX.Element;
        route: string;
    }[];
}[],
// Conteúdo antes das informações do usuário (canto superior direito)
contentBeforeUser?: JSX.Element;
```
