"""this module import from main.py"""

from main import say_hello


def test_say_hello():
    """this function test say_hello function from main.py"""
    assert say_hello() == "Hello, World :)"
