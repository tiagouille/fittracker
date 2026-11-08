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

## Hébergement GitHub Pages et code d’accès
Le déploiement visé est GitHub Pages. Voir GITHUB-PAGES.md pour le workflow manuel.
Un écran demande un code à chaque ouverture. Seule son empreinte SHA-256 figure dans les sources : le code en clair n’est pas stocké dans le dépôt. Ce verrou côté navigateur peut être contourné et un code court peut être deviné ; ce n’est pas une authentification serveur. Le code de l’application et ses fichiers restent publics sur GitHub Pages.
Les séances restent exclusivement dans le navigateur. Aucun historique personnel n’est envoyé à GitHub. Utiliser un profil personnel sur les appareils partagés. Le bouton Verrouiller masque l’application et interrompt une séance non enregistrée : enregistrer d’abord sa séance.
## Installation PWA
Après une première visite complète, utiliser Installer dans Chrome/Edge ou Partager > Sur l’écran d’accueil sur iPhone. Les capacités dépendent du navigateur. Notifications facultatives demandées uniquement depuis Paramètres ; pas de notifications planifiées quand l’application est fermée. Signal sonore soumis aux restrictions audio du navigateur. Le cache PWA conserve uniquement les fichiers de l’application.

## Usage
Le programme fourni est configurable et ne remplace pas des conseils adaptés. Arrêter en cas de douleur ; faire vérifier sa technique par un adulte ou un professionnel qualifié. Aucune augmentation automatique, aucune mesure de poids ou de calories.

