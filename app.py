from flask import Flask
from flask import render_template
app = Flask(__name__)
app.debug = True


# http://flask.pocoo.org
# az index fuggveny rendeleli le az index.html file-t

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/login")
def loginPage():
    return render_template('login.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
