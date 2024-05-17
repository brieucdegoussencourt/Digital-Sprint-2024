x = input()
y = []

def string_to_array(s):
    for i in s:
        y.append(i)
    return y

result = string_to_array(x)
print(result)