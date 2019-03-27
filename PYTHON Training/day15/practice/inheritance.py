# parent class
class Bird:
    def __init__(self):
        print('bird is ready')

    def whoisThis(self):
        print('bird')

    def swim(self):
        print('swim fcaster')

# child class


class Penguin(Bird):
    def __init__(self):
        # call super() function to pull the content of parent method.
        super.__init__()
        print('bird is ready')

    def whoisThis(self):
        print('penguin')

    def run(self):
        print('run fcaster')
import pdb; pdb.set_trace()
peggy=Penguin()
peggy.whoisThis()
peggy.swim()
peggy.run()