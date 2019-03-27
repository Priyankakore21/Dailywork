Question1. Describe the scope of the variables a, b, c and d in this example:

def my_function(a):
    b = a - 2
    return b

c = 3

if c > 2:
    d = my_function(5)
    print(d)

Ans=
a is a local variable in the scope of my_function because it is an argument name. b is also a local variable inside my_function, because it is assigned a value inside my_function. c and d are both global variables. It doesn’t matter that d is created inside an if block, because the inside of an if block is not a new scope – everything inside the block is part of the same scope as the outside (in this case the global scope). Only function definitions (which start with def) and class definitions (which start with class) indicate the start of a new level of scope.

Question2 . What is the lifetime of these variables? When will they be created and destroyed?
Ans=
Both a and b will be created every time my_function is called and destroyed when my_function has finished executing. c is created when it is assigned the value 3, and exists for the remainder of the program’s execution. d is created inside the if block (when it is assigned the value which is returned from the function), and also exists for the remainder of the program’s execution.


Question 3. Can you guess what would happen if we were to assign c a value of 1 instead?
Ans=
As we will learn in the next chapter, if blocks are executed conditionally. If c were not greater than 3 in this program, the if block would not be executed, and if that were to happen the variable d would never be created.


Question 4. Why would this be a problem? Can you think of a way to avoid it?
Ans=
We may use the variable later in the code, assuming that it always exists, and have our program crash unexpectedly if it doesn’t. It is considered poor coding practice to allow a variable to be defined or undefined depending on the outcome of a conditional statement. It is better to ensure that is always defined, no matter what – for example, by assigning it some default value at the start. It is much easier and cleaner to check if a variable has the default value than to check whether it exists at all.

