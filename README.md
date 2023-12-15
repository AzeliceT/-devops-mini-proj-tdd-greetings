# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 7
- Membres du groupe : 
    Araujo Correia Ana Carolina
    Dahman Kawtar
    Collard Gauthier

## Lien vers repo github 
https://github.com/AzeliceT/-devops-mini-proj-tdd-greetings

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
<Ce fichier YAML définit une série d'étapes à suivre dans une pipeline à intégration continue utilisant Github Actions. 

    La pipeline se déclenchera à la suite d'une pull request. 
    Celle-ci s'exécutera sur une machine virtuelle Ubuntu. 
Voici la descrption des étapes de l'intégration continue : 
- Checkout repository : Va récupérer le contenu du dépôt.
- Install dependencies : Va installer les dépendances requises à partir du fichier nommé package.json.
- Pipeline start time : Va afficher l'heure à laquelle la pipeline commence.
- Format code as Prettier: va vérifier le formatage du code avec Prettier
- Lint code as Lint: va vérifier la conformité du code avec les règles définis de lint
- Code test ( coverage > 80% ): Va exécuter les tests avec Jest et vérifie que la couverture du code est
strictement supérieure à 80%.
- Build code: Va construire le code selon les spécifications du projet.
- Pipeline end time: Va afficher l'heure à laquelle la pipeline se termine.
- Success message: Va afficher un message qui indique la pipeline s'est bien terminée sans aucune erreur.>
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
<L'utilisation du paramètre 'on' permet d'ordonner l'exécution de notre flux opérationnel dès qu'une condition spécifiée dans cette déclaration est remplie.

La distinction entre 'on push' et 'on pull request' réside dans le fait que 'on push' déclenche le flux même lorsqu'on travaille sur une branche autre que la principale (main). À l'inverse, 'on pull request' s'active uniquement lorsqu'on tente de fusionner avec une autre branche.
D'ailleurs, c'est pour la raison ci-dessous que nous n'avons mis qu'un pull request.

Il est recommandé d'adopter 'on pull request' lorsqu'on travaille avec un groupe de développeurs juniors. Cela leur offre une sécurité accrue, évitant par exemple toute fusion involontaire du code, tout en favorisant une productivité efficiente grâce à l'automatisation des tests et à la détection ciblée des erreurs.>
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<vL'instruction 'run' est accompagnée de la déclaration des commandes ou des étapes qui doivent être exécutées, tandis que 'run on' est suivi de l'environnement dans lequel le travail (job) va être exécuté. L'instruction 'run on' précise l'infrastructure sur laquelle les commandes, précédées de 'run', seront exécutées.

Dans notre pipeline, nous utilisons 'run on: ubuntu-latest', ce qui indique explicitement que les commandes suivantes seront exécutées sur une machine virtuelle fonctionnant avec la dernière version d'Ubuntu. Nous avons ensuite plusieurs commandes, chacune précédée de l'instruction 'run'.>
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<L'instruction 'run' est employée pour définir une commande à exécuter immédiatement. À l'inverse, 'use' introduit une action servant de prérequis pour une autre action spécifiée par la suite.

Dans notre configuration de pipeline, un exemple concret est l'utilisation de 'uses: actions/checkout@v3'. Cette directive assure que l'opération de checkout est effectuée avant chaque action, créant ainsi une base cohérente pour l'enchaînement des actions subséquentes. Cette approche facilite la modularité de notre fichier YAML, permettant une gestion plus fluide et réutilisable de notre pipeline.>
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<Oui. 
Cependant, il ne faut pas oublier les dépendances entre ces étapes. 
Par exemple, formater le code avant de le tester peut garantir des tests plus précis.>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<
Pour ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app, je devrais tout d'abord ajouter une nouvelle étape en utilisant le champ run pour exécuter la commande qui va lancer le test de sécurité, la commande 'npm run secure_app' par exemple. 
Il faut vérifier que toutes les dépendances nécessaires pour ce test de sécurité soient installées. 

Les questions que l'ont devrait se poser pour ajouter ce test de sécurités sont : 
Que va faire ce test de sécurité ? 
Quelles sont ces dépendances ? 
A quel moment de la pipeline ce test doit-il s'exécuter ? 
>
```
