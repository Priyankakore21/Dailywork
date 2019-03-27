Problem_Statement = '''Write down the two statements inside the
block created by the append_chickens function'''

print(Problem_Statement)


no_chickens = "No chickens here.."
def append_chickens(text):
	text = text + "Rawwwk!"
	return text
print(append_chickens(no_chickens))
