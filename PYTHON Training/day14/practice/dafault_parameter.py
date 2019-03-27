import pdb

def make_greetings(title, name, surname, formal=True):
    if formal:
        return 'hello,%s %s!' % (title, surname)

    return 'hello,%s !' % name


pdb.set_trace()
print(make_greetings('mr', 'john', 'smith'))
print(make_greetings('mr', 'john', 'smith', False))
