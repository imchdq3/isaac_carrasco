#importar las GPIO


import RPi.GPIO as GPIO
import time    

GPIO.setmode(GPIO.BCM)
GPIO.setup(24, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(23, GPIO.OUT )

while True:
    input_state = GPIO.input(24)
    if input_state == False:
        GPIO.output(23, True)      # Enciende el LED
        print('led encendido')
        time.sleep(0.3)
        GPIO.output(23, False)     # Apaga el LED
        print('led apagado')