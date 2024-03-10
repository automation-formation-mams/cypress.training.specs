Feature: Formation Cypress - BDD


        @SmokeTest
        Scenario: 01 - Se connecter avec du BDD
            Given Lancer URL "https://automationexercise.com/"
             When Cliquer sur le menu "Login"
             Then Verifier le pathname contient "/login"
              And Remplir le fomulaire de Connexion
                  | email              | password        |
                  | hps.ma@cypress.com | passwordcypress |
             Then Verifier que le nom de user connecté est "hps Ma"

        Scenario: 02 - Rechercher Produit
            Given Lancer URL "https://automationexercise.com/"
             When Cliquer sur le menu "Products"
             Then Verifier le pathname contient "/products"
             When Rerchercher Produit "Winter Top"
             Then Vérifier Présence Produit "Winter Top"