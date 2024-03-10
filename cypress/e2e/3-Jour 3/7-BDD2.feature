@SmokeTest
Feature: Formation Cypress - BDD 2

        Scenario: 02 - Rechercher Produit - 2 eme Feature
            Given Lancer URL "https://automationexercise.com/"
             When Cliquer sur le menu "Products"
             Then Verifier le pathname contient "/products"
             When Rerchercher Produit "Winter Top"
             Then Vérifier Présence Produit "Winter Top"