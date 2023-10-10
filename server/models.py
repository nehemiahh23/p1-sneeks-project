from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    confirmed = db.Column(db.Boolean, nullable=False, default=False)
    confirmed_on = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f"User {self.username}"
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created_on': self.created_on,
            'confirmed': self.confirmed,
            'confirmed_on': self.confirmed_on
        }

class Sneaker(db.Model):
    __tablename__ = 'sneakers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    maker = db.Column(db.String, nullable=False)

    prices = db.relationship("Price", backref="sneaker")

    def __repr__(self):
        return f'<Sneaker id={self.id} name={self.name} maker={self.maker}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'maker': self.maker,
            'image': self.image,
            'prices': [price.to_dict() for price in self.prices]
        }

class Price(db.Model):
    __tablename__ = 'prices'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer, nullable=False)
    size = db.Column(db.String, nullable=False)

    sneaker_id = db.Column(db.Integer, db.ForeignKey("sneakers.id"))

    def __repr__(self):
        return f'<Price id={self.id} price={self.price} size={self.size} sneaker_id={self.sneaker_id}>'

    def to_dict(self):
        return {
            'id': self.id,
            'price': self.price,
            'size': self.size
        }