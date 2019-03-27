Problem_Statement = '''The following python program is not indented correctly
rewrite it is so that it is correctly indeted'''

print(Problem_Statement)

def happy_day(day):
	if day == 'monday':
		return ':('
	if day != 'monday':
		return ':D'

print (happy_day('sunday'))
print (happy_day('monday'))
