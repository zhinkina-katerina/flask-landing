import requests
from .models import Message
from backend import db
import os
from dotenv import load_dotenv
from email_validator import validate_email, EmailNotValidError

load_dotenv()


class RequestHandler:
    def __init__(self):
        self.instance = None

    def validate_request(self):
        if not self.instance.get('name'):
            return False, "Name is missing"
        if not self.instance.get('message'):
            return False, "Message is missing"
        if not self.instance.get('email'):
            return False, "Email is missing"
        try:
            self.instance['email'] = validate_email(self.instance.get('email')).email
        except EmailNotValidError as error:
            return False, str(error)

        return True, "Thank you for your message! I`ll contact you as soon as possible"

    def send_email(self):
        try:
            url = "https://hourmailer.p.rapidapi.com/send"

            payload = {
                "toAddress": os.getenv('EMAIL_USER'),
                "title": "Message From Portfolio-Site",
                "message": f"Name: {self.instance['name']} Message: {self.instance['message']} Mail: {self.instance['email']}"
            }
            headers = {
                "content-type": "application/json",
                "X-RapidAPI-Key": os.getenv('X-RAPIDAPI-KEY'),
                "X-RapidAPI-Host": "hourmailer.p.rapidapi.com"
            }
            requests.request("POST", url, json=payload, headers=headers)
            return True
        except Exception:
            return False

    def add_to_database(self):
        obj = Message(name=self.instance.get('name'),
                      email=self.instance.get('email'),
                      message=self.instance.get('message'))
        db.session.add(obj)
        db.session.commit()
