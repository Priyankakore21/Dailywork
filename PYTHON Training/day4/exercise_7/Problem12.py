Question 1. Write a Python program to convert a temperature given in degrees Fahrenheit to its equivalent in degrees Celsius. You can assume that T_c = (5/9) x (T_f - 32), where T_c is the temperature in °C and T_f is the temperature in °F. Your program should ask the user for an input value, and print the output. The input and output values should be floating-point numbers.

program :

T_f = float(input("Please enter a temperature in °F: "))
T_c = (5/9) * (T_f - 32)
print("%g°F = %g°C" % (T_f, T_c))

Question 2. What could make this program crash? What would we need to do to handle this situation more gracefully?
Ans =
The program could crash if the user enters a value which cannot be converted to a floating-point number. We would need to add some kind of error checking to make sure that this doesn’t happen – for example, by storing the string value and checking its contents. If we find that the entered value is invalid, we can either print an error message and exit or keep prompting the user for input until valid input is entered.

