from flask import Flask, request, jsonify
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
        'answer': f'This is an answer to your question: "{question}"'
    }
    return app.response_class(response=json.dumps(response), mimetype='application/json')

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.get_json()
    feedback = data.get('feedback')
    
    # Here you can handle the feedback (e.g., save to a database or process it)
    print(f"Received feedback: {feedback}")

    response = {
        'status': 'success',
        'message': 'Feedback received successfully'
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
