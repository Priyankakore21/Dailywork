Convert a list which contains the numbers 1, 1, 2, 3 and 3, and convert it to a tuple a.
Convert a to a list b. Print its length.
Convert b to a set c. Print its length.
Convert c to a list d. Print its length.
Create a range which starts at 1 and ends at 10. Convert it to a list e.
Create the directory dict from the previous example. Create a list t which contains all the key-value pairs from the dictionary as tuples.
Create a list v of all the values in the dictionary.
Create a list k of all the keys in he dictionary.
Create a string s which contains the word "antidisestablishmentarianism". Use the sorted function on it. What is the output type? Concatenate the letters in the output to a string s2.
Split the string "the quick brown fox jumped over the lazy dog" into a list w of individual words.






---------1----------
>>> list_a=[1,1,2,3,3]
>>> list_a
[1, 1, 2, 3, 3]
>>> tuple_a=tuple(list_a)
>>> tuple_a
(1, 1, 2, 3, 3)

--------2-------------
>>> list_a
[1, 1, 2, 3, 3]
>>> list_b=list_a[:]
>>> list_b
[1, 1, 2, 3, 3]
>>> len(list_b)
5

---------3-------------
>>> list_b
[1, 1, 2, 3, 3]
>>> set_c=set(list_b)
>>> set_c
{1, 2, 3}
>>> len(set_c)
3

----------4------------
>>> list_d=list(set_c)
>>> list_d
[1, 2, 3]
>>> len(list_d)
3

-----------5------------
>>> list_e=list(range(1,11))
>>> list_e
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

------------6----------------
>>> dict.items
<built-in method items of dict object at 0x7f9284e30798>
>>> dict.items()
dict_items([('id', 1), ('name', 'piya'), ('class', 'N-BU')])
>>> list_t=list(dict.items())
>>> list_t
[('id', 1), ('name', 'piya'), ('class', 'N-BU')]
>>>

================7=====================
>>> list_v=list(dict.values())
>>> list_v
[1, 'piya', 'N-BU']

================8======================
>>> list_k=list(dict.keys())
>>> list_k
['id', 'name', 'class']
>>>

================9====================

>>> s="antidisestablishmentarianism"
>>> sorted
<built-in function sorted>
>>> sorted(s)
['a', 'a', 'a', 'a', 'b', 'd', 'e', 'e', 'h', 'i', 'i', 'i', 'i', 'i', 'l', 'm', 'm', 'n', 'n', 'n', 'r', 's', 's','s', 's', 't', 't', 't']
>>> s
'antidisestablishmentarianism'
>>> type(sorted(s))
<class 'list'>
>>> s2=''.join(sorted(s))
>>> s2
'aaaabdeehiiiiilmmnnnrssssttt'
>>>

================10====================
>>> list_w=list(string_s.split())
>>> list_w
['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']