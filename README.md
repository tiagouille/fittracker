# FitTracker
Application personnelle React + TypeScript, Vite, Tailwind CSS, Lucide et Recharts. Interface française, mode sombre et sauvegarde locale.

## Lancement
Node.js 22 ou supérieur recommandé.
```sh
npm install
npm run dev
```
## Compilation
```sh
npm run build
npm run preview
```
Le dossier `dist` contient l’application compilée. Les paramètres et séances sont stockés dans le navigateur (pas de synchronisation entre appareils). Export/import JSON dans Paramètres. Une séance en cours n’est pas restaurée après fermeture : terminer et enregistrer avant de quitter.

## Fonctionnalités
Programme de cinq exercices, étapes par bras, échauffement et repos réglables, minuteurs fondés sur les timestamps, séance partielle, bilan avec fatigue et ressenti par exercice, calendrier, graphique hebdomadaire, statistiques, couleurs et planning personnalisables, export/import validé et PWA hors ligne. Le temps total inclut les pauses et les repos. Une série unilatérale réalisée sur un bras compte comme une série dans les statistiques.

## Confidentialité et hébergement
Le dépôt GitHub est privé. L’hébergement Sites est configuré séparément en accès propriétaire uniquement. Aucun mot de passe n’est embarqué dans le JavaScript. Les données locales et les fichiers mis en cache restent accessibles au profil de navigateur utilisé, même hors ligne : utiliser un profil personnel sur les appareils partagés.

### GitHub Pages
GitHub Pages sert des fichiers statiques ; un écran de mot de passe écrit en JavaScript ne protège pas réellement le site. Ne pas activer Pages pour ce projet tant que l’accès exclusivement personnel est exigé. Pour une version volontairement publique : compiler avec `npm run build`, déployer le contenu de `dist` avec une action officielle GitHub Pages et définir la source Pages sur GitHub Actions. La base relative Vite permet l’usage sous `/fittracker/`. L’éligibilité des dépôts privés dépend de l’offre GitHub. Le déploiement Sites privé est la voie retenue ici.

## Installation PWA
Après une première visite complète, utiliser Installer dans Chrome/Edge ou Partager > Sur l’écran d’accueil sur iPhone. Les capacités dépendent du navigateur. Notifications facultatives demandées uniquement depuis Paramètres ; pas de notifications planifiées quand l’application est fermée. Signal sonore soumis aux restrictions audio du navigateur. Le cache PWA conserve uniquement les fichiers de l’application.

## Usage
Le programme fourni est configurable et ne remplace pas des conseils adaptés. Arrêter en cas de douleur ; faire vérifier sa technique par un adulte ou un professionnel qualifié. Aucune augmentation automatique, aucune mesure de poids ou de calories.
