import pdb


def make_greetings(title, name, surname, formal=True, time=None):
    if formal:
        return 'hello,%s %s!' % (title, surname)
    else:
        fullname = name

    if time is None:
        greeting = 'hello'
    else:
        greeting = 'good %s' % time

    return '%s,%s!' % (greeting, fullname)


pdb.set_trace()
print(make_greetings('mr', 'john', 'smith'))
print(make_greetings('mr', 'john', 'smith', False))
print(make_greetings('mr', 'john', 'smith', False, 'evening'))
