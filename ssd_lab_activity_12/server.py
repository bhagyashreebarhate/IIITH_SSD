from curses import flash
from enum import unique
from flask_login import (LoginManager, login_manager, login_user, logout_user, login_required, UserMixin)
from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///user.db'
app.config['SECREET_KEY'] = 'secretkey'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
class User(UserMixin,db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100),unique=True, nullable = False)
    password = db.Column(db.String(100), nullable = False)

with app.app_context():
    db.create_all()
@login_manager.user_loader
def load_user(email):
    return User.query.get(email)

@app.route('/user/signin',methods =['Post'])
def do_signin():
    if(request.method=='POST'):
        req = request.get_json()
        name = req['name']
        email = req['email']
        password = req['password']
        check_user = User.query.filter_by(email=email).first()
        if(check_user is not None):
            if(check_user.password == password):
                login_user(check_user)
                return "Logged in successfully"
            else:
                return "Error!"
        else:
            return "No such user exists"



if "__main__" == __name__:
    app.run(host="127.0.0.1",port="5000",debug=True)

