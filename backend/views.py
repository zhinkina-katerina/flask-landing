from flask import request
from backend import app
from .models import Project
import json
from .request_handler import RequestHandler


@app.route("/api/get_portfolio_items", methods=["GET"])
def get_portfolio_items():
    projects = Project.query.all()
    return json.dumps(Project.serialize_list(projects))


@app.route("/api/send_email", methods=["POST"])
def send_email():
    request_handler = RequestHandler()
    result = (eval(request.form.to_dict()['params']))
    request_handler.instance = result
    is_validate, message = request_handler.validate_request()
    if not is_validate:
        return {'email_was_sent': False, 'message': message}
    if not request_handler.send_email():
        return {'email_was_sent': False, 'message': 'The email was not sent for some reason. Please email me directly '
                                                    'at katerina.zhinkina@gmail.com'}
    request_handler.add_to_database()
    return {'email_was_sent': True, 'message': message}
