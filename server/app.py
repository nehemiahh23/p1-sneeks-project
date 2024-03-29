from flask import Flask, request
from flask_cors import CORS
from flask_migrate import Migrate

from models import db, Sneaker, Price

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return ''

@app.get('/sneakers')
def all_sneakers():
    return [sk.to_dict() for sk in Sneaker.query.all()], 200

@app.get('/sneakers/<int:id>')
def get_sneaker(id):
    try:
        sk = Sneaker.query.get(id)
        print(sk.prices)
        return sk.to_dict(), 200
    except:
        return {"error": "Sneaker not found"}, 404

@app.post('/sneaker')
def create_sneaker():
    try:
        new_sk = Sneaker(**request.json)
        db.session.add(new_sk)
        db.session.commit()
        return new_sk.to_dict(), 200
    except:
        return {"error": "Invalid input"}, 400

@app.post('/price')
def create_price():
    try:
        new_pr = Price(**request.json)
        db.session.add(new_pr)
        db.session.commit()
        return new_pr.to_dict(), 200
    except:
        return {"error": "Invalid input"}, 400

@app.patch('/patch/<int:id>')
def patch_price(id):
    newPrice = request.json
    price = Price.query.get(id).update(newPrice)
    db.session.commit()

    price = Price.query.get(id)
    
    return price.to_dict(), 201

@app.delete('/price-delete/<int:id>')
def delete_price(id):
    price = Price.query.get(id)
    db.session.delete(price)
    db.session.commit()
    return {"message": "Successfully deleted"}, 204

if __name__ == '__main__':
    app.run(port=5555, debug=True)