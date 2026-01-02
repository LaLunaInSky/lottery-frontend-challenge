# Lottery Frontend Challenge

## Initial Information

This project is the solution to the challenge proposed by the [readme-frontend](https://github.com/brainnco-exs/readme-frontend) repository of [Brainn Co. - Exercises](https://github.com/brainnco-exs).

## Introduction to the Challenge
The challenge involves building a frontend website that will display the results of **6 lotteries** from **Caixa Econômica Federal**, namely:
* **Mega-Sena**;
* **Quina**;
* **Lotofácil**;
* **Lotomania**;
* **Timemania**;
* **Dia de Sorte**.

### Models to Use
The layout templates, API, and typography that will need to be used:
* [Layout](https://www.figma.com/file/H2qrYBCFMf4didYmxRwTxP/Brainn-Frontend-Challenge);
* [API](https://brainn-api-loterias.herokuapp.com/);
* [Typography (Webfont)](https://fonts.google.com/specimen/Montserrat).

### Challenge Requirements
* The application will have to support **6 draws**:
    - Mega-Sena;
    - Quina;
    - Lotofácil;
    - Lotomania;
    - Timemania;
    - Dia de Sorte.
* All raffles will be in a combo-box/select;
* When changing this combo-box, you will have to change the **raffle theme, raffle number, raffle date** and **winning numbers**;
* The application must be responsive, at least for mobile phones, according to the layout;
* API consumption can be done via **Rest** or **GRAPHQL**;
* Create a route using the **React Router DOM** (optional).

### Expected Technologies
* **React** with Typescript;
* Test with **React Testing Library** and/or **Cypress**.

## My Solution to the Challenge
![image](/.github/lottery_frontend_screenshot.png)

I used the mobile-first approach, allowing the application to be responsive to various screen sizes.

### Project Link
My solution is online at the [LINK](https://loteria.lalunainsky.com/).

### Solution to Problems
#### 1º Problem
* In the recommended models, it was not possible to use the API provided by the source repository, so I needed to create my own API with the most current data from the date **(02/01/2026)**;
* The API respository used in this challenge is [lottery-api-challenge](https://github.com/LaLunaInSky/lottery-api-challenge), a solution I developed.
#### 2º Problem
* For using React technology, I found it more practical to use it in conjunction with Next technology.
