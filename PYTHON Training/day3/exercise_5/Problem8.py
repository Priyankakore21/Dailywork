Question 2.
what is the differance between integer and floating point division? what is the operator used for floating division?

The division operator / means integer division if there is an integer on both sides of it. If one or two sides has a floating point number, then it means floating point division. The result of integer division is always an integer. Integer division determines how many times one integer goes into another.

Division Operators in Python. The real floor division operator is “//”. It returns floor value for both integer and floating point arguments. Here is another surprise, In Python 3, '/' operator does floating point division for both int and float arguments.

In Python 3.0, 5 / 2 will return 2.5 and 5 // 2 will return 2 . The former is floating point division, and the latter is floor division, sometimes also called integer division. Regardless of the future import, 5.0 // 2 will return 2.0 since that's the floor division result of the operation.

Question 3.

What are the result of the following operations and explain why?

a. 1.5+2
ans=3.5
b. 1.5//2.0
ans= 0.0 
c. 1.5/2.0
ans= 0.75
d. 1.5 ** 2
ans= 2.25
e. 1/2
ans=0.5
f. -3//2
ans= -2

Question 4.
What happens when you evaluate 1 / 0 in the Python console?
Ans
A ZeroDivisionError is raised. Note that the error message is slightly different to the one returned by 1 // 0.


Question5 What happens when you evaluate 1e1000? What about -1e1000? And type(1e1000)?
Ans
1e1000 is too large to be represented as a floating-point number. Instead the special floating-point value inf is returned (inf is short for infinity). As you will have noticed by inspecting its type, inf is really a floating-point number in Python (and not the string "inf"). -1e1000 gives a different special floating-point value, -inf, which is short for minus infinity). These special values are defined by the IEEE 754 floating-point specification that Python follows.



