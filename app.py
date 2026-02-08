from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/yes")
def yes():
    return render_template("yes.html")

@app.route("/letter")
def letter():
    return render_template("letter.html")

if __name__ == "__main__":
    app.run(debug=True)
