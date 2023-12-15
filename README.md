# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 7
- Membres du groupe : 
    Araujo Correia Ana Carolina
    Dahman Kawtar
    Collard Gauthier


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Le fichier YML est une configuration pour des actions automatisées sur GitHub. Il est déclenché lorsqu'une nouvelle pull request est ouverte ou éditée. Voici ce qu'il fait :

Checkout repository: Récupère le code du dépôt.
Install dependencies: Installe les dépendances via npm.
Pipeline start time: Affiche l'heure de début du pipeline.
Format code as Prettier: Utilise Prettier pour formater le code.
Lint code as Lint: Effectue une vérification de style sur le code.
Code test (coverage > 80%): Exécute les tests du code avec une condition de couverture minimale de 80%.
Build code: Compile le code si nécessaire.
Pipeline end time: Affiche l'heure de fin du pipeline.
Success message: Affiche un message de réussite si le pipeline est terminé sans erreurs.

Cela configure un pipeline de CI/CD basique pour le dépôt, vérifiant le style du code, exécutant des tests, construisant le code et affichant un message de réussite en cas de passage sans erreur.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le champ "on" dans ce fichier YML indique les événements déclencheurs qui vont lancer le workflow d'actions.

"on: push" déclencherait le workflow à chaque fois qu'un commit est poussé sur n'importe quelle branche du référentiel.
"on: pull_request" déclenche le workflow lorsqu'une nouvelle pull request est ouverte ou éditée.

Pour les développeurs juniors, commencer avec "on: pull_request" pourrait être plus approprié. Cela leur permettrait de se concentrer sur des validations plus pertinentes lorsque le code est prêt à être fusionné, évitant ainsi une surcharge de vérifications pour chaque commit potentiellement non finalisé. Cela peut aider à maintenir un flux de travail plus clair et à concentrer l'attention sur les validations au moment opportun.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
"run-on" détermine l'environnement d'exécution global pour toutes les étapes du workflow, tandis que "run" est utilisé dans chaque étape pour spécifier les actions ou commandes à exécuter dans cet environnement spécifié par "run-on".
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
"uses" est pour utiliser des actions préexistantes ou des configurations externes, tandis que "run" est utilisé pour exécuter des commandes spécifiques dans le contexte de l'étape actuelle du workflow.
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui, vous pouvez généralement changer l'ordre des étapes sans problème majeur. Cependant, certaines étapes peuvent dépendre des résultats d'autres étapes, donc la réorganisation doit prendre en compte ces dépendances pour que le workflow fonctionne correctement.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Pour ajouter le test de sécurité avec secure_app il faudrait tout d'abord vérifier les dépendances et l'environnement requis puis ajouter 
une étape pour le test à la bonne place dans la séquence existante. On devrait ensuite définir les attentes de sortie et l'erreur si l'on rencontre un échec. Finalement, on intègre le test en utilisant "run" en s'assurant que l'environnement d'exécution convient.
```
