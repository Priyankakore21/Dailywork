try:
    age = int(input('enter ur age:'))
    if age < 0:
        raise ValueError('%d is not a valid age.age must be positive or zero.')
except ValueError as err:
    print('u entered incorrect age input:%s' % err)
else:
    print('i see that u are %d years old.' % age)
