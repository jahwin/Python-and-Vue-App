import eel

eel.init('web')


@eel.expose
def get_text_in_python():
    return "This text are coming from python backend"

# Position in the center of the screen


eel.start('index.html', size=(1300, 800),
          mode='chrome', port=0, position=(0, 0))
