#this is global variable
a = 0

if a == 0:
	#this is still aglobal variable
	b=1

def my_function(c):
	#this is a local variable
	d=3
	print(c)
	print(d)

# now we call the function , passing the value 7 as the first and only parameter
my_function(7)

#a and b still exist
print(a)
print(b)

#c and b dont exist anymore -- these statements give name errors
print(c)
print(d)
