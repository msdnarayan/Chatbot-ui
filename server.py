from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
messages=[]
@app.route('/answer', methods=['POST'])
def answer():
    data = request.get_json()
    question = data.get('question')
    global messages
    # Here you would implement the logic to generate an answer.
    # For simplicity, we'll return a static response.
    answer = f'This is an answer to your question: "{question}"'
    response = {
        'answer': answer
    }
    messages.append(question)
    messages.append(answer)
    # Log the question and answer to the terminal
    print(f"User Question: {question}")
    print(f"Chatbot Answer: {answer}")
    
    return app.response_class(response=json.dumps(response), mimetype='application/json')

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.get_json()
    feedback = data.get('feedback')
    index = data.get('index')
    global messages
    print(messages[index])
    print(messages[index-1])
    # Log the feedback to the terminal
    print(f"Received feedback for message {index}: {feedback}")
    
    # Here you can handle the feedback (e.g., save to a database or process it)
    response = {
        'status': 'success',
        'message': 'Feedback received successfully'
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
