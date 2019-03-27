while True:
    number = int(input('enter ur number'))
    if number % 2 == 0:
        print('even number:%d' % number)
    else:
        print('odd number:%d' % number)
    if number == 99:
        print('end')
        break
        
