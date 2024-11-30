import random

def adivina_numero():
    numero_adivinar = random.randint(1, 100)
    intentos = 7

    print(" adivina el número entre 1 y 100.")
    print(f"Tienes {intentos} oportunidades para adivinar.")

    while intentos > 0:
        try:
            numeroingresado = int(input("Ingresa un número entre 1 y 100: "))
            if numeroingresado == numero_adivinar:
                print("¡Felicitaciones! Usted has adivinado el número.")
                return
            elif numeroingresado < numero_adivinar:
                print("El número a adivinar es mayor.")
            else:
                print("El número a adivinar es menor.")
        except ValueError:
            print("Ingresa un número válido.")

        intentos -= 1

    print(f"el numero que tenia que adivinar es : {numero_adivinar}")

adivina_numero()



