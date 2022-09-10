from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story, Story

app = Flask(__name__)

app.config['SECRET_KEY'] = "cats_are_cool"
debug = DebugToolbarExtension(app)

@app.route('/form')
def show_form():
    id = int(request.args['story_id'])
    selected_story=Story.instances[id]
    return render_template('form.html', story=selected_story, story_id=id)

@app.route('/')
def show_dropdown():
    return render_template('home.html', story_count=len(Story.instances))

@app.route('/story')
def show_story():
    id = int(request.args['story_id'])
    selected_story=Story.instances[id]
    text = selected_story.generate(request.args)

    return render_template('story.html', text=text)