Problem_Statement = '''Write down why each of the entries in the left column will raise a syntax error if is is used as an indetifier.

   Index Syntax error  Bad practice  Good practice
     1   Person Record    PRcrd      PersonRecord
     2  DEFAULT-HEIGHT   Default-Ht  DEFAULT_HEIGHT
     3     class         Class       AlgebraCourse
     4   2totalweight    num2        total_weight'''

print(Problem_Statement)

Answer='''Answer for index 1 => Abbreviations should not be used while defining an identifier name.
                         And it should follow the rule of CamelCase.
  
   Answer for index 2 => All letters of "Constant identrifiers" should be in capital letters.
 
   Answer for index 3 => If we defining a class, class name should be descriptive. We should
                         not write directly as 'class'. 
                         Example:-Let's take a class, which simply adds two numbers. Then we 
                         can define class name as "AdditionOf2Numbers".


   Answer for index 4 => Variable name should be meaningfull and descriptive.'''  
                         
print(Answer)
