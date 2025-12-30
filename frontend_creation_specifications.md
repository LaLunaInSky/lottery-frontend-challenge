# Frontend Creation Specifications

## Resources
* [Layout](https://www.figma.com/file/H2qrYBCFMf4didYmxRwTxP/Brainn-Frontend-Challenge)
* [Typography (Webfont)](https://fonts.google.com/specimen/Montserrat)

## Requirements and Functionalities
* The application will **need to support 6 lottery draws from Caixa Econômica Federal**, wich are:
    - Mega-Sena
    - Quina
    - Lotofácil
    - Lotomania
    - Timemania
    - Dia de Sorte
* All draws must be within a **combo-box/select**
* When you change the selection in the **combo-box**, the page will change the theme based on the selected draw, showing the last draw number, draw date, and the winning numbers. The themes for each draw are as follows:
    - Mega-Sena is **#6BEFA3**
    - Quina is **#8666EF**
    - Lotofácil is **#DD7AC6**
    - Lotomania is **#FFAB64**
    - Timemania is **#5AAD7D**
    - Dia de Sorte is **#BFAF83**
* The application should follow the mobile-first concept
* The application should consume the data trough the **GrapgQL API that you build**
* If needed, you can create routes using React Router DOM

## Expected Tecnologies
* React with Typescript
* Test with the **REACT TESTING LIBRARY** or **CYPRESS**