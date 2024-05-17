# Guess the number

## Que devais-je faire?

Je devais créer un petit jeu en python dans lequel le joueur doit deviner un nombre entre 0 et 100. Comment? L'ordinateur génère un nombre entre 0 et 100 et le joueur à 10 essais pour le deviner. En fonction de ses essais, il a des indices lui indiquant si le nombre à trouver est plus petit ou plus grand que celui qu'il a proposé. Si il trouve dans les 10 essais, il reçoit un message de victoire tandis que si il ne le trouve pas, il reçoit un message de défaite.

---

## A quoi ressemble le code?

```sh
import random

chiffre_a_trouver = random.randint(0, 100)
name = input("Veuillez insérer votre nom: ")

for i in range(10):
  guess = input("Deviner le nombre entre 0 et 100: ")
  while not guess.isdigit() or int(guess) <= 0 or int(guess) >= 100 :
    guess = input("Veuillez introduire un NOMBRE entre 0 et 100: ")
  if int(guess) == chiffre_a_trouver:
    print(f"BRAVOOOO {name}!!! Vous avez trouver le nombre qui était", chiffre_a_trouver, "en", i+1, "rounds")
    break
  elif int(guess) > chiffre_a_trouver:
    print("Le chiffre à trouvé est plus petit que le votre")
  elif int(guess) < chiffre_a_trouver:
    print("Le chiffre à trouvé est plus grand que le votre")

if int(guess) != chiffre_a_trouver:
  print(f"Dommage {name}... Vous n'avez pas trouver le chiffre a trouver, c'était", chiffre_a_trouver)
```

---

## Comment ça marche?

- J'ai import la librairie random pour plus tard
- On crée une variable "chiffre_à_trouver" à laquelle on assigne un nombre random compris entre 0 et 100 grace a la librairie "random"
- On crée une variable "name" qui demande un input pour récupérer le nom du joueur
- On crée une boucle "for" qui va faire 10 itérations pour les 10 essais du joueur 
- On crée une variable "guess" qui va demander avec une boucle "while" au joueur d'insérer un nombre
- Il y a des tests dans cette boucle qui vérifie si l'input est bien compris entre 0 et 100 et est un int
- Ensuite, on a des "if" et "elif" qui vérifie si le nombre est plus petit, plus grand ou égal au chiffre à deviner. En fonction, il va donner une réponse adaptée
- Si il trouve le nombre, on sort de la boule avec un break
- Si les 10 itérations sont passées avant que le joueur aie trouvé le nombre, un message apparait pour dire qu'il a perdu

 ---

## Comment jouer?

1. Insérez votre nom
2. Tentez de deviner le nombre entre 0 et 100
3. Si vous essayer autre chose qu'un nombre entre 0 et 100, un nombre vous sera redemandé jusqu'a ce que ce soit un input valable
4. Un message s'affichera ensuite en fonction du nombre que vous avez introduit et du nombre à deviner
5. Vous avez 10 essais pour trouver le nombre
6. Si vous y arrivez, bravo vous serez récompensé d'un petit message
7. Si vous faites les 10 essais sans trouver, vous recevrez un message vous disant que vous avez perdu avec le nombre que vous deviez trouver



