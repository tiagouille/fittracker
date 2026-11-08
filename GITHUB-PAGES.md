# Déploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` compile l’application et publie uniquement `dist` avec les actions officielles GitHub. Il se lance manuellement pour éviter toute publication avant le choix de confidentialité.

1. Vérifier l’éligibilité du dépôt : sur GitHub Free, Pages nécessite un dépôt public ; GitHub Pro permet un dépôt privé, mais le site reste public pour un compte personnel.
2. Dans Settings → Pages, sélectionner GitHub Actions comme source.
3. Dans Actions, ouvrir « Déployer FitTracker sur GitHub Pages », puis Run workflow sur main.
4. Attendre le succès du job deploy. Il fournit l’adresse effective du site.

La base relative Vite est déjà compatible avec le chemin `/fittracker/`.

## Accès et données

GitHub Pages ne fournit pas d’authentification privée native aux sites d’un compte personnel. Un mot de passe vérifié uniquement en JavaScript ne constitue pas une protection du site. Ne publier qu’après acceptation explicite de son accès public.

Les séances restent dans le localStorage du navigateur : aucun historique personnel n’est inclus dans le code déployé. Changer d’hébergement change l’origine du navigateur : exporter le JSON depuis l’ancien site, puis l’importer dans Paramètres sur le nouveau pour retrouver son historique.

L’ancien site ChatGPT n’est pas supprimé par ce workflow.
