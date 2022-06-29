from backend import db
from sqlalchemy.inspection import inspect
import datetime
from pytz import timezone


class Serializer(object):

    def serialize(self):
        return {c: getattr(self, c) for c in inspect(self).attrs.keys()}

    @staticmethod
    def serialize_list(list):
        return [item.serialize() for item in list]


class Project(db.Model, Serializer):
    __tablename__ = 'projects'
    extend_existing = True

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String())
    title = db.Column(db.String())
    description = db.Column(db.String())
    git_link = db.Column(db.String())
    demo_link = db.Column(db.String())

    def serialize(self):
        d = Serializer.serialize(self)
        return d


class Message(db.Model):
    __tablename__ = 'messages'
    extend_existing = True
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    email = db.Column(db.String())
    message = db.Column(db.String())
    created = db.Column(db.DateTime, default=datetime.datetime.now(timezone('US/Eastern')))

    def __init__(self, name, email, message):
        self.name = name
        self.email = email
        self.message = message
