import pdb


class computer:
    def __init__(self):
        self.__maxprice = 900

    def sell(self):
        print('selling price:{}'.format(self.__maxprice))

    def setMaxPrice(self, price):
        self.__maxprice = price


pdb.set_trace()
c = computer()
c.sell()

# change the price
c.__maxprice = 1000
c.sell()

# using setter function
c.setMaxPrice(1000)
c.sell()
