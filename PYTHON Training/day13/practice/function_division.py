
def divide(dividend, divisor):
    if not divisor:
        return None,None #instead of dividing by zero
    quotient = dividend//divisor
    remainder = dividend % divisor
    return quotient, remainder


# you can do this
q, r = divide(35, 4)

# result=divide(67,9)