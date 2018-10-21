# External module imp
import RPi.GPIO as GPIO
import time
import sys
import boto3
import datetime

init = False
pin = 7
GPIO.setmode(GPIO.BOARD) # Broadcom pin-numbering scheme

GPIO.setup(pin, GPIO.OUT)
GPIO.output(pin, GPIO.LOW)
time.sleep(int(sys.argv[1]))
GPIO.output(pin, GPIO.HIGH)
GPIO.cleanup()

dynamodb = boto3.resource('dynamodb', 'us-east-1')
table = dynamodb.Table('waterings')
time = datetime.datetime.now()

table.put_item(Item={
    'time': str(time),
    'year': str(time.year),
    'monthYear': time.strftime("%B") + ' ' + str(time.year)
})

print('Success')