def print_everything(*args, **kwargs):
    for arg in args:
        print(arg)
    for k, v in kwargs.items():
        print("%s:%s" % (k, v))
