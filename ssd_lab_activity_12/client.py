from flask import Flask, jsonify
import requests

def signin():
    name = input("Enter name:")
    email = input("Enter Email:")
    password = input("Enter password:")

    payload = {
        "name":name,
        "email":email,
        "password":password
    }
    resp = requests.post("http://127.0.0.1/user/signin",json=payload).content.decode()
    print(resp)

