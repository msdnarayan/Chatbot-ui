from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/answer', methods=['POST'])
def answer():
    data = request.get_json()
    question = data.get('question')
    
    # Here you would implement the logic to generate an answer.
    # For simplicity, we'll return a static response.
    response = {
        'answer': f'This is a  to your question: "{question}"'
    }
    return app.response_class(response=json.dumps(response), mimetype='application/json')

if __name__ == '__main__':
    app.run(debug=True)
