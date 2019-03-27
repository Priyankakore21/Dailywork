#for i in zip((1, 2, 3), (4, 5, 6)):
 #   print(i)

# comprehensions
numbers=[1,2,3,4,5,6]
doubles = [2*number for number in numbers]
even = [number for number in numbers if number % 2 == 0]
print(even)

#a generater comprehensions
doubles_generator=list(2*number for number in numbers)
print(doubles_generator)
#a set comprehensions
doubles_set=list({2*number for number in numbers})
print(doubles_set)
#a dict comprehensions
doubles_dict=list({number:2*number for number in numbers})
print(doubles_dict)