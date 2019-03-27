weight= float(input('enter parcel weight:'))
if weight <= 1000 :
    if weight <= 300:
        cost = 5
    else:
        cost=5+2* round((weight-300)/100)
        print ('your parcel will cost R%d.'%cost)

else:
print("maximum weight for small parcel exceeded.")
print('use large parcel service insted.')