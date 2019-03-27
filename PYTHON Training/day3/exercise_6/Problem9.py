Question 1.
Given variables x and y, use string formatting to print out the values of x and y and their sum. For example, if x = 5 and y = 3 your statement should print 5 + 3 = 8.
Ans =
print("%s + %s = %s" % (x, y, x + y))

>>> x="sd"
>>> y="gshdgj"
>>> print("%s + %s = %s" % (x, y, x + y))
sd + gshdgj = sdgshdgj
>>> 

Question 2.
Re-write the following strings using single-quotes instead of double-quotes. Make use of escape sequences as needed: #. "Hi! I'm Eli." 
#. "The title of the book was \"Good Omens\"." 
#. "Hi! I\'m Sebastien."

The equivalent single-quoted strings are: 
#. 'Hi! I\'m Eli.' 
#. 'The title of the book was "Good Omens".' 
#. 'Hi! I\'m Sebastien.'

Question 3.
Use escape sequences to write a string which represents the letters a, b and c separated by tabs.

ans=
"a\tb\tc"


Question 4.
Use escape sequences to write a string containing the following haiku (with newlines) inside single double-or-single quotes. Then do the same using triple quotes instead of the escape sequences:

the first cold shower
even the monkey seems to want
a little coat of straw

Ans=
Using single double-quotes:

"the first cold shower\neven the monkey seems to want\na little
coat of straw"

Using triple quotes:

"""the first cold shower
even the monkey seems to want
a little coat of straw"""

Question 5.
Given a variable name containing a string, write a print statement that prints the name and the number of characters in it. For example, if name = "John", your statement should print John's name has 4 letters..
Ans=
print("%s's name has %s letters." % (name, len(name)))


question 6.
What does the following sequence of statements output:

name = "John Smythe"
print(name.lower())
print(name)

e.g
>>> a="MMMM"
>>> print(a.lower())
mmmm
>>> print(a)
MMMM

Why is the second line output not lowercase?
Ans=
john smythe
John Smythe

