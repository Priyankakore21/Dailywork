#we define some options
LOWER, UPPER, CAPITAL = 1,2,3

name = 'jane'

#we use our constants when assigning these values

print_style = UPPER

#... and when checking them:

if print_style == LOWER:
	print(name.lower())
elif print_style == UPPER:
	print(name.upper())

elif print_style == CAPITAL:
	print(name.capitailze())
else:
#nothing prevents us from accidently setting print_style to 4, 90 or
#'spoon' so we put in this fallback just in case:
	print('unknown style opton')
