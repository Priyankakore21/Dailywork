import pdb


def print_args(*args):
    for arg in args:
        print(arg)


print_args('one', 'two', 'three')
print_args('one', 'two', 'three', 'four')


def print_kwargs(**kwargs):
    for k, v in kwargs.items():
        print("%s:%s" % (k, v))


pdb.set_trace()
print_kwargs(name='jane', surname='doe')
print_kwargs(age=10)
