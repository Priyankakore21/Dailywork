matrix=[[1,2,3],[4,5,6],[7,8,9]]
print(matrix)
l = len(matrix[0])
print(l)
print [matrix[i][i] for i in range(l)]              
#print[matrix[j][j] for j in range(l)]
print [matrix[l-1-i][i] for i in range(l-1,-1,-1)] 


