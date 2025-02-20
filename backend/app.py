from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/trends', methods=['GET'])
def get_trends():
    trends = [
        {"id": 1, "name": "Y2K Aesthetic", "popularity": 95},
        {"id": 2, "name": "Oversized Streetwear", "popularity": 90},
        {"id": 3, "name": "Minimalist Fashion", "popularity": 85}
    ]
    return jsonify(trends)

if __name__ == '__main__':
    app.run(debug=True)
