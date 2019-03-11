from browser import document, alert

def echo():
    alert("Brython working")

document["mybutton"].bind("click", echo)
